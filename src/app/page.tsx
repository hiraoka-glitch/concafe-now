export default function Home() {
  return (
    <div style={{padding: "2rem", textAlign: "center"}}>
      <h1>🎉 コンカフェなう</h1>
      <p>デプロイ成功！アプリケーションが正常に動作しています。</p>
      <p>現在時刻: {new Date().toLocaleString("ja-JP")}</p>
    </div>
  )
}
