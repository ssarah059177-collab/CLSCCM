window.YT_API = {
  SETTINGS_KEY: 'cls_yt_settings_v3',
  
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
    const res = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${playlistId}&maxResults=${max || 50}&key=${apiKey}`);
    const data = await res.json();
    if (data.error) throw new Error(data.error.message || 'YouTube API 오류');
    return (data.items || []).map(this.mapItem);
  },
  
  async fetchPlaylists(channelId, apiKey, max) {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${channelId}&maxResults=${max || 50}&key=${apiKey}`);
    const data = await res.json();
    if (data.error) throw new Error(data.error.message || 'YouTube API 오류');
    return data.items || [];
  },
  
  async loadAll({ handle, apiKey }) {
    const { channelId, uploadsPlaylistId } = await this.resolveChannel(handle, apiKey);
    
    // 1. 전체 최신 영상 최대 50개 가져오기
    const all = await this.fetchPlaylistItems(uploadsPlaylistId, apiKey, 50); 
    
    // 2. 재생목록(카테고리) 최대 50개 가져오기
    const playlists = await this.fetchPlaylists(channelId, apiKey, 50); 
    
    const rows = [];
    for (const pl of playlists) {
      // 3. 각 재생목록 안의 영상 최대 50개 가져오기
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
