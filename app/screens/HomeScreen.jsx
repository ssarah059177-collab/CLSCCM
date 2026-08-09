window.HomeScreen = function HomeScreen({ nav, ds, yt }) {
  const { VideoThumbnailCard, Tag, IconButton } = ds;
  const live = yt.status === 'ready' && !!yt.data;
  const { parables, figures } = window.CLS_DATA;
  const staticHero = window.CLS_DATA.hero;
  const staticRows = [
    { key: 'parable', title: '예수님의 비유', items: parables.slice(0, 4) },
    { key: 'figures', title: '성경 인물', items: figures.slice(0, 4) },
  ];
  const hero = live ? yt.data.hero : staticHero;
  const PLAYLIST_MAP = {
    '파라블CCM': 'PLAxI-fzcQtxo',
    '성경인물CCM': 'PLGxulYRr8lJ3fEys2myw1d5jKKhKDku6B',
    '애니메이션CCM': 'PLGxulYRr8lJ2IUZlMfwSSBKQAjqrbn59s',
    'Global CCM': 'PLGxulYRr8lJ2bIs8SZE5SA9L_cSu619gB',
    '영어CCM': 'PLQ5a8UD4kKX0',
  };
  
  const chips = ['전체', '📱 쇼츠 모아보기', '파라블CCM', '성경인물CCM', '애니메이션CCM', 'Global CCM', '영어CCM'];
  const [chip, setChip] = React.useState('전체');
  const [chipItems, setChipItems] = React.useState(null);
  const [chipLoading, setChipLoading] = React.useState(false);
  const [chipError, setChipError] = React.useState('');
  const cacheRef = React.useRef({});

  const loadChip = React.useCallback(async (c) => {
    setChip(c);
    if (!live) return;
    setChipError('');
    
    if (c === '전체') { setChipItems(yt.data.all); setChipLoading(false); return; }
    
    if (c === '📱 쇼츠 모아보기') { 
      const shortsRow = yt.data.rows.find(r => r.key === 'shorts_only');
      setChipItems(shortsRow ? shortsRow.items : []); 
      setChipLoading(false); 
      return; 
    }
    
    const playlistId = PLAYLIST_MAP[c];
    if (!playlistId) { setChipItems([]); setChipLoading(false); return; }
    if (cacheRef.current[c]) { setChipItems(cacheRef.current[c]); setChipLoading(false); return; }
    
    setChipItems(null); setChipLoading(true);
    try {
      const items = await window.YT_API.fetchPlaylistItems(playlistId, yt.settings.apiKey, 500); 
      
      const isShort = (it) => {
        const text = ((it.title || '') + ' ' + (it.description || '')).toLowerCase();
        return text.includes('#shorts') || text.includes('#쇼츠');
      };
      const cleanItems = items.filter(it => !isShort(it));
      
      cacheRef.current[c] = cleanItems;
      setChipItems(cleanItems);
    } catch (e) {
      setChipError(e.message || '재생목록을 불러오지 못했어요');
    } finally {
      setChipLoading(false);
    }
  }, [live, yt.data, yt.settings.apiKey]);

  React.useEffect(() => { cacheRef.current = {}; loadChip('전체'); }, [live]);

  let rows;
  if (live) {
    rows = [{ key: chip, title: chip === '전체' ? '전체 영상' : chip, items: chipItems || [] }];
  } else {
    const staticFiltered = chip === '전체' ? staticRows
      : chip === '파라블CCM' ? staticRows.filter(r => r.key === 'parable')
      : chip === '성경인물CCM' ? staticRows.filter(r => r.key === 'figures')
      : [];
    rows = staticFiltered;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
      <div style={{ padding: '20px 20px 4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 600, color: 'var(--color-brand-primary)' }}>CLS Bible TV</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <a href={`https://www.youtube.com/channel/${yt.settings.handle || 'UCFH45g8rhOBwUR4g_FEm_ag'}?sub_confirmation=1`} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '7px 14px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-brand-primary)', fontSize: 'var(--fs-body-sm)', fontWeight: 'var(--fw-medium)', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>
            <i data-lucide="play-circle" style={{ width: 15, height: 15 }}></i>
            채널 바로가기
          </a>
          {/* 💡 시청자들의 실수를 방지하기 위해 톱니바퀴(설정) 버튼을 삭제했습니다. */}
        </div>
      </div>
      <div style={{ display: 'flex', gap: 8, overflowX: 'auto', padding: '14px 20px 4px' }}>
        {chips.map((c) => (
          <button key={c} onClick={() => loadChip(c)} style={{
            flexShrink: 0, padding: '8px 16px', borderRadius: 'var(--radius-pill)', border: chip === c ? 'none' : '1px solid var(--color-border)',
            background: chip === c ? 'var(--color-brand-primary)' : 'var(--color-surface)', color: chip === c ? 'var(--color-text-on-primary)' : 'var(--color-text-secondary)',
            fontSize: 'var(--fs-body-sm)', fontWeight: chip === c ? 'var(--fw-semibold)' : 'var(--fw-regular)', fontFamily: 'var(--font-sans)', cursor: 'pointer', whiteSpace: 'nowrap',
          }}>{c}</button>
        ))}
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 20px 100px' }}>
        {hero && (
          <div onClick={() => nav('player', hero)} style={{ cursor: 'pointer', marginBottom: 32 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-brand-secondary)', marginBottom: 10 }}>{live ? '최신 영상' : hero.badge}</div>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: 'var(--radius-lg)', background: 'var(--navy-900)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              {live && hero.thumbnail && <img src={hero.thumbnail} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />}
              <IconButton icon={<i data-lucide="play" style={{ width: 28, height: 28 }}></i>} label="재생" variant="filled" size="lg" />
              {hero.tag && <span style={{ position: 'absolute', top: 12, left: 12 }}><Tag tone="olive">{hero.tag}</Tag></span>}
              {hero.duration && <span style={{ position: 'absolute', bottom: 10, right: 12, background: 'oklch(15% 0 0 / 0.7)', color: '#fff', fontSize: 'var(--fs-micro)', padding: '2px 8px', borderRadius: 'var(--radius-sm)' }}>{hero.duration}</span>}
            </div>
            <div style={{ marginTop: 14 }}>
              <div style={{ fontSize: 20, fontWeight: 600, color: 'var(--color-text-primary)' }}>{hero.title}</div>
              <div style={{ fontSize: 14, color: 'var(--color-text-secondary)', marginTop: 4 }}>{hero.series}</div>
              {hero.desc && <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.6, marginTop: 8 }}>{hero.desc}</p>}
            </div>
          </div>
        )}
        {live && chipLoading && (
          <div style={{ padding: '48px 4px', textAlign: 'center', color: 'var(--color-text-muted)', fontSize: 14 }}>불러오는 중...</div>
        )}
        {live && !chipLoading && chipError && (
          <div style={{ padding: '48px 4px', textAlign: 'center', color: 'var(--error-500)', fontSize: 14 }}>{chipError}</div>
        )}
        {!chipLoading && !chipError && rows.every(r => r.items.length === 0) && (
          <div style={{ padding: '48px 4px', textAlign: 'center', color: 'var(--color-text-muted)', fontSize: 14, lineHeight: 1.7 }}>
            아직 등록된 영상이 없어요.<br/>곧 새로운 영상으로 만나요.
          </div>
        )}
        {!chipLoading && !chipError && rows.map((row) => (row.items.length === 0 ? null :
          <div key={row.key} style={{ marginBottom: 28 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
              <div style={{ fontSize: 19, fontWeight: 600, color: 'var(--color-text-primary)' }}>{row.title}</div>
              <div style={{ fontSize: 13, color: 'var(--color-text-muted)', cursor: 'pointer' }} onClick={() => nav('browse', { chip, playlistId: chip === '전체' ? null : (chip === '📱 쇼츠 모아보기' ? 'shorts' : PLAYLIST_MAP[chip]), title: row.title })}>더보기</div>
            </div>
            <div style={{ display: 'flex', gap: 14, overflowX: 'auto', paddingBottom: 4 }}>
              {row.items.map((it) => (
                <div key={it.videoId || it.title} style={{ minWidth: 200, flexShrink: 0 }} onClick={() => nav('player', it)}>
                  {live && it.thumbnail
                    ? <div>
                        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                          <img src={it.thumbnail} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                        </div>
                        <div style={{ marginTop: 8, fontSize: 'var(--fs-body)', fontWeight: 'var(--fw-semibold)', color: 'var(--color-text-primary)' }}>{it.title}</div>
                      </div>
                    : <VideoThumbnailCard {...it} />}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
