window.FavoritesScreen = function FavoritesScreen({ nav, ds }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
      <div style={{ padding: '20px 20px 4px' }}>
        <div style={{ fontSize: 22, fontWeight: 600, color: 'var(--color-text-primary)' }}>즐겨찾기</div>
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 40px' }}>
        <div style={{ textAlign: 'center', color: 'var(--color-text-muted)', fontSize: 15, lineHeight: 1.8 }}>
          아직 즐겨찾기한 영상이 없어요.<br/>마음에 드는 영상을 저장해보세요.
        </div>
      </div>
    </div>
  );
};
