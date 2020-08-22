// ______________________________________________________
// SEO
import React from "react"
import { Helmet } from "react-helmet"

// ______________________________________________________
// 型
type Props = {
  title: string // タイトル
  description: string　// 説明
}

// ______________________________________________________
// コンポーネント
const Component: React.FC<Props> = props => {
  const { title, description } = props
  return (
    <Helmet>
      <html lang="ja" />
      <meta
        name="google-site-verification"
        content="oWT-LOh_wCJkHuXCs7MYcN53UHRjumOfXYe0wqF67I8"
      />
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <title>{title}</title>
    </Helmet>
  )
}

export default Component
