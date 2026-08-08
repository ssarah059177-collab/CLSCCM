window.YT_API = {
  SETTINGS_KEY: 'cls_yt_settings_v6', 
  
  getSettings() {
    const defaultSettings = {
      handle: 'UCFH45g8rhOBwUR4g_FEm_ag', 
      apiKey: 'AIzaSyCb2bF5rDuUICgyl2yvI_HO6slIuJwyycs' 
    };
    try {
      const saved = JSON.parse(localStorage.getItem(this.SETTINGS_KEY) || '{}');
      return {
        handle: saved.handle || defaultSettings.handle,
        apiKey: saved.apiKey || defaultSettings.apiKey
      };
    } catch (e) {
      return defaultSettings;
    }
  },
  
  saveSettings(s) { localStorage.setItem(this.SETTINGS_KEY, JSON.stringify(s)); },
  
  mapItem(it) {
    const vid = (it.contentDetails && it.contentDetails.videoId) || (it.snippet && it.snippet.resourceId && it.snippet.resourceId.videoId) || it.id;
    const thumbs = it.snippet.thumbnails || {};
    return {
      videoId: vid,
      title: it.snippet.title,
      thumbnail: (thumbs.medium || thumbs.high || thumbs.default || {}).url,
      series: it.snippet.channelTitle || 'CLS Bible TV',
      publishedAt: it.snippet.publishedAt,
      description: it.snippet.description,
    };
  },
  
  async resolveChannel(handle, apiKey) {
    const h = handle.replace(/^@?/, '');
    const res = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=id,contentDetails&id=${h}&key=${apiKey}`);
    const data = await res.json();
    if (data.error) throw new Error(data.error.message || 'YouTube API 오류');
    if (!data.items || !data.items.length) throw new Error('채널을 찾을 수 없어요');
    const item = data.items[0];
    return { channelId: item.id, uploadsPlaylistId: item.contentDetails.relatedPlaylists.uploads };
  },
  
  async fetchPlaylistItems(playlistId, apiKey, max) {
    let allItems = [];
    let nextPageToken = '';
    const limit = max || 500; 
    
    while (allItems.length < limit) {
      const fetchSize = Math.min(50, limit - allItems.length);
      const tokenParam = nextPageToken ? `&pageToken=${nextPageToken}` : '';
      const res = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${playlistId}&maxResults=${fetchSize}&key=${apiKey}${tokenParam}`);
      const data = await res.json();
      
      if (data.error) throw new Error(data.error.message || 'YouTube API 오류');
      
      allItems = allItems.concat((data.items || []).map(this.mapItem));
      nextPageToken = data.nextPageToken;
      
      if (!nextPageToken) break; 
    }
    return allItems;
  },
  
  async fetchPlaylists(channelId, apiKey, max) {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${channelId}&maxResults=${max || 50}&key=${apiKey}`);
    const data = await res.json();
    if (data.error) throw new Error(data.error.message || 'YouTube API 오류');
    return data.items || [];
  },
  
  async loadAll({ handle, apiKey }) {
    const { channelId, uploadsPlaylistId } = await this.resolveChannel(handle, apiKey);
    
    const rawAll = await this.fetchPlaylistItems(uploadsPlaylistId, apiKey, 500); 
    const playlists = await this.fetchPlaylists(channelId, apiKey, 50); 
    
    // 💡 핵심 1: 쇼츠를 판별하는 규칙 (제목이나 설명에 #shorts 또는 #쇼츠 가 포함된 것)
    const isShort = (it) => {
      const text = ((it.title || '') + ' ' + (it.description || '')).toLowerCase();
      return text.includes('#shorts') || text.includes('#쇼츠');
    };

    // 💡 핵심 2: 쇼츠와 일반 영상을 완벽하게 쪼개기
    const all = rawAll.filter(it => !isShort(it)); // '전체' 메뉴에서는 쇼츠를 숨김
    const shorts = rawAll.filter(it => isShort(it)); // 쇼츠만 따로 가방에 담음
    
    const rows = [];
    
    // 💡 핵심 3: '쇼츠 모아보기' 전용 카테고리(메뉴)를 맨 앞에 생성
    if (shorts.length > 0) {
      rows.push({ key: 'shorts_only', title: '📱 쇼츠 모아보기', items: shorts });
    }

    for (const pl of playlists) {
      const items = await this.fetchPlaylistItems(pl.id, apiKey, 500); 
      // 다른 재생목록 안에서도 쇼츠가 섞여있다면 숨겨줍니다.
      const filteredItems = items.filter(it => !isShort(it));
      
      if (filteredItems.length) {
        rows.push({ key: pl.id, title: pl.snippet.title, items: filteredItems });
      }
    }
    
    // 앱을 켰을 때 맨 위에 뜨는 가장 큰 메인 영상도 무조건 '일반 영상'으로 고정
    return { channelId, hero: all[0] || rawAll[0], all, rows };
  },
  
  async searchChannel(channelId, query, apiKey, max) {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&q=${encodeURIComponent(query)}&type=video&order=date&maxResults=${max || 50}&key=${apiKey}`);
    const data = await res.json();
    if (data.error) throw new Error(data.error.message || 'YouTube API 오류');
    return (data.items || []).map(this.mapItem);
  },
};
