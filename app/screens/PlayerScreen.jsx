window.PlayerScreen = function PlayerScreen({ nav, ds, video }) {
  const { IconButton, ProgressBar, Tag, Tabs } = ds;
  const v = video || window.CLS_DATA.hero;
  const isLive = !!v.videoId;
  const [tab, setTab] = React.useState(isLive ? '영상 설명' : '말씀 구절');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'var(--color-surface)', overflow: 'hidden' }}>
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', background: 'var(--navy-900)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        {isLive ? (
          <iframe
            src={`https://www.youtube.com/embed/${v.videoId}?autoplay=0&rel=0`}
            title={v.title} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
          ></iframe>
        ) : (
          <IconButton icon={<i data-lucide="play" style={{ width: 26, height: 26 }}></i>} label="재생" variant="filled" size="lg" />
        )}
        <div style={{ position: 'absolute', top: 16, left: 16 }}>
          <IconButton icon={<i data-lucide="arrow-left" style={{ width: 20, height: 20, color: '#fff' }}></i>} label="닫기" onClick={() => nav('home')} />
        </div>
        {!isLive && (
          <div style={{ position: 'absolute', left: 16, right: 16, bottom: 12 }}>
            <ProgressBar value={v.progress || 0} tone="accent" />
          </div>
        )}
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px 20px 100px' }}>
        {v.tag && <Tag tone="olive">{v.tag}</Tag>}
        <div style={{ fontSize: 22, fontWeight: 600, marginTop: 12, color: 'var(--color-text-primary)' }}>{v.title}</div>
        <div style={{ fontSize: 14, color: 'var(--color-text-secondary)', marginTop: 4 }}>{v.series}</div>
        {isLive ? (
          <div style={{ marginTop: 24 }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: 10 }}>영상 설명</div>
            <p style={{ fontSize: 15, color: 'var(--color-text-secondary)', lineHeight: 1.8, whiteSpace: 'pre-line' }}>{v.description || '설명이 없어요.'}</p>
          </div>
        ) : (
          <React.Fragment>
            <div style={{ marginTop: 24 }}>
              <Tabs items={['말씀 구절', '가사']} active={tab} onChange={setTab} />
            </div>
            <div style={{ marginTop: 18, padding: '4px 4px 0' }}>
              {tab === '말씀 구절' ? (
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: 18, color: 'var(--color-text-primary)', lineHeight: 1.9, fontStyle: 'italic' }}>{v.verse}</p>
              ) : (
                <p style={{ fontSize: 16, color: 'var(--color-text-primary)', lineHeight: 2, whiteSpace: 'pre-line' }}>{v.lyrics}</p>
              )}
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};
