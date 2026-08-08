window.ListScreen = function ListScreen({ nav, ds, kind, yt, target }) {
  const { VideoThumbnailCard } = ds;
  const live = yt.status === 'ready' && !!yt.data;
  const { parables, figures } = window.CLS_DATA;
  const chip = target && target.chip;
  const playlistId = target && target.playlistId;
  const [items, setItems] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    if (!live) return;
    if (!playlistId) { setItems(yt.data.all); setError(''); return; }
    let cancelled = false;
    setLoading(true); setError(''); setItems(null);
    
    // ⬇️ 유튜브에 최대 200개까지 넉넉하게 요청합니다!
    window.YT_API.fetchPlaylistItems(playlistId, yt.settings.apiKey, 200)
      .then((res) => { if (!cancelled) { setItems(res); setLoading(false); } })
      .catch((e) => { if (!cancelled) { setError(e.message || '재생목록을 불러오지 못했어요'); setLoading(false); } });
    return () => { cancelled = true; };
  }, [live, playlistId]);

  const staticItems = chip === '파라블CCM' ? parables : chip === '성경인물CCM' ? figures : [...parables, ...figures];
  const title = live ? (chip && chip !== '전체' ? chip : '전체 영상') : (kind === 'parable' ? '예수님의 비유' : kind === 'figures' ? '성경 인물' : (chip || '모아보기'));
  const sub = live ? '유튜브에서 실시간으로 불러온 영상이에요' : '지금까지 올라온 영상을 만나요';
  const list = live ? (items || []) : staticItems;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
      <div style={{ padding: '20px 20px 4px' }}>
        <div style={{ fontSize: 22, fontWeight: 600, color: 'var(--color-text-primary)' }}>{title}</div>
        <div style={{ fontSize: 14, color: 'var(--color-text-secondary)', marginTop: 4 }}>{sub}</div>
      </div>
      {live && loading && (
        <div style={{ padding: '48px 20px', textAlign: 'center', color: 'var(--color-text-muted)', fontSize: 14 }}>불러오는 중...</div>
      )}
      {live && !loading && error && (
        <div style={{ padding: '48px 20px', textAlign: 'center', color: 'var(--error-500)', fontSize: 14 }}>{error}</div>
      )}
      {!(live && (loading || error)) && (
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px 20px 100px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {list.map((it) => (
            <div key={it.videoId || it.title} onClick={() => nav('player', it)} style={{ cursor: 'pointer' }}>
              {live && it.thumbnail ? (
                <div>
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                    <img src={it.thumbnail} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <div style={{ marginTop: 8, fontSize: 'var(--fs-body)', fontWeight: 'var(--fw-semibold)', color: 'var(--color-text-primary)' }}>{it.title}</div>
                </div>
              ) : <VideoThumbnailCard {...it} />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};window.ListScreen = function ListScreen({ nav, ds, kind, yt, target }) {
  const { VideoThumbnailCard } = ds;
  const live = yt.status === 'ready' && !!yt.data;
  const { parables, figures } = window.CLS_DATA;
  const chip = target && target.chip;
  const playlistId = target && target.playlistId;
  const [items, setItems] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    if (!live) return;
    if (!playlistId) { setItems(yt.data.all); setError(''); return; }
    let cancelled = false;
    setLoading(true); setError(''); setItems(null);
    
    // ⬇️ 유튜브에 최대 200개까지 넉넉하게 요청합니다!
    window.YT_API.fetchPlaylistItems(playlistId, yt.settings.apiKey, 200)
      .then((res) => { if (!cancelled) { setItems(res); setLoading(false); } })
      .catch((e) => { if (!cancelled) { setError(e.message || '재생목록을 불러오지 못했어요'); setLoading(false); } });
    return () => { cancelled = true; };
  }, [live, playlistId]);

  const staticItems = chip === '파라블CCM' ? parables : chip === '성경인물CCM' ? figures : [...parables, ...figures];
  const title = live ? (chip && chip !== '전체' ? chip : '전체 영상') : (kind === 'parable' ? '예수님의 비유' : kind === 'figures' ? '성경 인물' : (chip || '모아보기'));
  const sub = live ? '유튜브에서 실시간으로 불러온 영상이에요' : '지금까지 올라온 영상을 만나요';
  const list = live ? (items || []) : staticItems;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
      <div style={{ padding: '20px 20px 4px' }}>
        <div style={{ fontSize: 22, fontWeight: 600, color: 'var(--color-text-primary)' }}>{title}</div>
        <div style={{ fontSize: 14, color: 'var(--color-text-secondary)', marginTop: 4 }}>{sub}</div>
      </div>
      {live && loading && (
        <div style={{ padding: '48px 20px', textAlign: 'center', color: 'var(--color-text-muted)', fontSize: 14 }}>불러오는 중...</div>
      )}
      {live && !loading && error && (
        <div style={{ padding: '48px 20px', textAlign: 'center', color: 'var(--error-500)', fontSize: 14 }}>{error}</div>
      )}
      {!(live && (loading || error)) && (
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px 20px 100px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {list.map((it) => (
            <div key={it.videoId || it.title} onClick={() => nav('player', it)} style={{ cursor: 'pointer' }}>
              {live && it.thumbnail ? (
                <div>
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                    <img src={it.thumbnail} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <div style={{ marginTop: 8, fontSize: 'var(--fs-body)', fontWeight: 'var(--fw-semibold)', color: 'var(--color-text-primary)' }}>{it.title}</div>
                </div>
              ) : <VideoThumbnailCard {...it} />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
