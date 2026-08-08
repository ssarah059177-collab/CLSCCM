window.YT_API = {
  SETTINGS_KEY: 'cls_yt_settings_v5', 
  
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
    const limit = max || 500; // 최대 500개까지 싹 다 가져옵니다!
    
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
    
    // ⬇️ 여기가 핵심입니다! 홈 화면의 전체 영상과 상단 칩들이 참조할 데이터를 500개로 대폭 늘렸습니다.
    const all = await this.fetchPlaylistItems(uploadsPlaylistId, apiKey, 500); 
    const playlists = await this.fetchPlaylists(channelId, apiKey, 50); 
    
    const rows = [];
    for (const pl of playlists) {
      // ⬇️ 홈 화면에 보이는 개별 재생목록들도 500개까지 모두 긁어옵니다.
      const items = await this.fetchPlaylistItems(pl.id, apiKey, 500); 
      if (items.length) rows.push({ key: pl.id, title: pl.snippet.title, items });
    }
    return { channelId, hero: all[0], all, rows };
  },
  
  async searchChannel(channelId, query, apiKey, max) {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&q=${encodeURIComponent(query)}&type=video&order=date&maxResults=${max || 50}&key=${apiKey}`);
    const data = await res.json();
    if (data.error) throw new Error(data.error.message || 'YouTube API 오류');
    return (data.items || []).map(this.mapItem);
  },
};
