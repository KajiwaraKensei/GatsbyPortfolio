// ______________________________________________________
// SEO
import React from "react"
import { Helmet } from "react-helmet"
import { profile } from "data/profile"
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
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={"@" + profile.twitter} />
      <meta property="og:url" content="https://kaji-pf.netlify.app/" />
      <meta property="og:title" content={`${profile.name}'s Portfolio`} />
      <meta property="og:description" content={`${profile.name}のポートフォリオサイトです。`} />
      <meta property="og:image" content="https://kajiwarakensei.github.io/GatsbyPortfolio/src/images/gat_icon.png" />
      <title>{title}</title>
    </Helmet>
  )
}

export default Component
