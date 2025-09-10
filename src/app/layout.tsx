import { Metadata } from "next"

export const metadata: Metadata = {
  title: "コンカフェなう - 秋葉原コンカツカフェ即入マッチングサービス",
  description: "秋葉原のコンカツカフェで理想のキャストと出会おう！",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
