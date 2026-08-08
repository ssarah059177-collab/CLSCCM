window.YT_API = {
  SETTINGS_KEY: 'cls_yt_settings_v4',
  
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
  
  // ⬇️ 페이지를 자동으로 넘기며 계속 가져오도록 업그레이드된 핵심 부분입니다!
  async fetchPlaylistItems(playlistId, apiKey, max) {
    let allItems = [];
    let nextPageToken = '';
    const limit = max || 200; // 최대 200개까지 자동으로 가져옵니다.
    
    while (allItems.length < limit) {
      const fetchSize = Math.min(50, limit - allItems.length);
      const tokenParam = nextPageToken ? `&pageToken=${nextPageToken}` : '';
      const res = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${playlistId}&maxResults=${fetchSize}&key=${apiKey}${tokenParam}`);
      const data = await res.json();
      
      if (data.error) throw new Error(data.error.message || 'YouTube API 오류');
      
      allItems = allItems.concat((data.items || []).map(this.mapItem));
      nextPageToken = data.nextPageToken;
      
      if (!nextPageToken) break; // 더 이상 가져올 영상이 없으면 알아서 멈춥니다.
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
    const all = await this.fetchPlaylistItems(uploadsPlaylistId, apiKey, 50); 
    const playlists = await this.fetchPlaylists(channelId, apiKey, 50); 
    const rows = [];
    for (const pl of playlists) {
      const items = await this.fetchPlaylistItems(pl.id, apiKey, 50); 
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
