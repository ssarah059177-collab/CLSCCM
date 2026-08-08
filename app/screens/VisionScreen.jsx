window.VisionScreen = function VisionScreen({ nav, ds }) {
  const { Card } = ds;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
      <div style={{ padding: '20px 20px 4px' }}>
        <div style={{ fontSize: 22, fontWeight: 600, color: 'var(--color-text-primary)' }}>채널 소개</div>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 20px 100px' }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 600, color: 'var(--color-brand-primary)', lineHeight: 1.4, marginBottom: 16 }}>
          이야기와 노래로<br/>말씀을 전합니다
        </div>
        <p style={{ fontSize: 15, color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: 24 }}>
          CLS Bible TV는 예수님의 비유와 성경 속 인물들의 이야기를 CCM 뮤직비디오로 전하는 채널이에요. 익숙한 이야기를 다시 들려드리며, 그 안의 은혜를 함께 나누고 싶어요.
        </p>
        <Card>
          <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: 8 }}>예수님의 비유</div>
          <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>선한 사마리아인, 탕자의 비유, 잃은 양 등 예수님이 들려주신 이야기를 노래로 만나요.</p>
        </Card>
        <div style={{ height: 12 }} />
        <Card>
          <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: 8 }}>성경 인물</div>
          <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>다윗, 요셉, 에스더, 룻 같은 인물들의 삶을 통해 오늘의 우리를 돌아봐요.</p>
        </Card>
        <p style={{ fontSize: 13, color: 'var(--color-text-muted)', lineHeight: 1.8, marginTop: 24 }}>
          매주 새로운 영상으로 여러분과 만나요. 함께 보고, 함께 은혜받기를 바랍니다.
        </p>
      </div>
    </div>
  );
};
