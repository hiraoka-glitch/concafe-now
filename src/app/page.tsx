export default function Home() {
  return (
    <div style={{
      padding: '2rem',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      color: 'white'
    }}>
      <h1 style={{fontSize: '3rem', marginBottom: '1rem'}}>
        🎉 コンカフェなう
      </h1>
      <p style={{fontSize: '1.2rem', marginBottom: '2rem'}}>
        デプロイ成功！アプリケーションが正常に動作しています。
      </p>
      <div style={{
        background: 'rgba(255,255,255,0.1)',
        padding: '1rem',
        borderRadius: '10px',
        display: 'inline-block'
      }}>
        <p style={{margin: 0}}>
          現在時刻: {new Date().toLocaleString('ja-JP')}
        </p>
        <p style={{margin: '0.5rem 0 0 0', fontSize: '0.9rem', opacity: 0.8}}>
          Vercel + Next.js + React で動作中
        </p>
      </div>
    </div>
  )
}
