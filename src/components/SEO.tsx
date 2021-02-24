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
  twitter: {
    card?: string;
    url?: string;
    title?: string;
    description?: string;
    img?: string;
  }
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
      <meta name="twitter:card" content={props.twitter.card || "summary_large_image"} />
      <meta name="twitter:site" content={"@" + profile.twitter} />
      <meta property="og:url" content={props.twitter.url || "https://kaji-pf.netlify.app/"} />
      <meta property="og:title" content={props.twitter.title || `${profile.name}'s Portfolio`} />
      <meta property="og:description" content={props.twitter.description || `${profile.name}のポートフォリオサイトです。`} />
      <meta property="og:image" content={props.twitter.img || "https://kajiwarakensei.github.io/GatsbyPortfolio/src/images/bc.png"} />
      <title>{title}</title>
    </Helmet>
  )
}

export default Component
