window.SettingsScreen = function SettingsScreen({ nav, ds, yt }) {
  const { Input, Button, Tag } = ds;
  const [handle, setHandle] = React.useState(yt.settings.handle || '@clsbibletv');
  const [apiKey, setApiKey] = React.useState(yt.settings.apiKey || '');
  const statusMap = {
    idle: { label: '연동 안 됨', tone: 'neutral' },
    loading: { label: '불러오는 중...', tone: 'navy' },
    ready: { label: '실시간 연동됨', tone: 'olive' },
    error: { label: '오류', tone: 'live' },
  };
  const s = statusMap[yt.status] || statusMap.idle;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
      <div style={{ padding: '20px 20px 4px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <span onClick={() => nav('home')} style={{ display: 'inline-flex', cursor: 'pointer' }}><i data-lucide="arrow-left" style={{ width: 22, height: 22, color: 'var(--color-text-secondary)' }}></i></span>
        <div style={{ fontSize: 20, fontWeight: 600, color: 'var(--color-text-primary)' }}>YouTube 연동 설정</div>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px 20px 100px', display: 'flex', flexDirection: 'column', gap: 18 }}>
        <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
          유튜브 채널의 최신 영상과 재생목록을 실시간으로 불러오려면 YouTube Data API v3 키가 필요해요.
        </p>
        <Input label="채널 핸들" value={handle} onChange={(e) => setHandle(e.target.value)} placeholder="@clsbibletv" />
        <Input label="YouTube API 키" value={apiKey} onChange={(e) => setApiKey(e.target.value)} placeholder="AIza..." type="password" />
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>상태</span>
          <Tag tone={s.tone}>{s.label}</Tag>
        </div>
        {yt.status === 'error' && (
          <p style={{ fontSize: 13, color: 'var(--error-500)', lineHeight: 1.6 }}>{yt.error}</p>
        )}
        <Button variant="primary" onClick={async () => { await yt.connect({ handle, apiKey }); nav('home'); }}>저장하고 불러오기</Button>
        <Button variant="secondary" onClick={() => yt.disconnect()}>연동 해제</Button>
        <p style={{ fontSize: 12, color: 'var(--color-text-muted)', lineHeight: 1.7, marginTop: 8 }}>
          API 키는 이 기기의 브라우저에만 저장돼요. Google Cloud Console에서 YouTube Data API v3를 사용하는 키를 발급받아 입력해주세요.
        </p>
      </div>
    </div>
  );
};
