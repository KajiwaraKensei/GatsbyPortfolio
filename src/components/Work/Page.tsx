// ______________________________________________________
// 作品紹介ページ - index
import React, { Fragment } from "react"
import styled from "styled-components"
import SEO from "~/components/SEO"
import { NotFount, Header, Contents, BackButton } from "."
import works, { workType } from "~/data/works"
import Footer from "~/Parts/Footer"
import { setSize } from "~/lib/scroll"
import { useWindowSize } from "~/lib/redux"
import "../index.css"

// ______________________________________________________
// 型
type Props = {
  className?: string
  name: string
}

// ______________________________________________________
// コンポーネント
const Component: React.FC<Props> = props => {
  const { className, name } = props
  const [work] = React.useState<workType | undefined>(works.find(e => e.name.toLowerCase() === name.toLowerCase()))
  const { state } = useWindowSize()

  const BackPosition = (index: number) => {
    switch (state.type) {
      case "pc":
        return `calc(100% - ${index * 5}rem)`
      case "tablet":
        return `calc(100% - ${index * 4}rem)`
      case "phone":
        return `calc(100% - ${index * 3.5}rem)`
    }
  }
  const fontSize = setSize(state.type, ".75rem", ".7rem", ".65rem")
  const size = setSize(state.type, "4rem", "3.5rem", "3rem")
  const Page = work && (
    <Fragment>
      <SEO
        title={work.name}
        description={work.name + "のページです。" + work.briefDescription}
        twitter={{
          card: "summary",
          url: "https://kaji-pf.netlify.app/work/" + work.name + "/",
          description: work.briefDescription,
          title: "作品紹介 : " + work.name,
          img: "https://kajiwarakensei.github.io/GatsbyPortfolio/src/images/" + work.icon
        }}
      />
      <Header url={work.backgroundImage} />
      <Contents work={work} />
      <Footer />
      <BackButton
        font={fontSize}
        size={size}
        position={backButtonPosition(BackPosition(1))}
        text="BACK"
      />
      <a href={work.demo} rel="noopener noreferrer" target="_blank">
        <BackButton
          font={fontSize}
          size={size}
          position={backButtonPosition(
            BackPosition(2),
            ["#fff", "#6b62fd"],
            ["#6b62fd", "#fff"]
          )}
          text="DEMO"
          onClick={() => { }}
        />
      </a>
      <a href={work.github} rel="noopener noreferrer" target="_blank">
        <BackButton
          font={fontSize}
          size={size}
          position={backButtonPosition(
            BackPosition(3),
            ["#fff", "#000"],
            ["#000", "#fff"]
          )}
          text="Github"
          onClick={() => { }}
        />
      </a>
    </Fragment>
  )

  return (
    <div className={className}>{!work ? <NotFount name={name} /> : Page}</div>
  )
}

// ______________________________________________________
// スタイル
export default styled(Component)`
  color: #000;
`

const backButtonPosition = (
  top: string,
  color?: [string, string],
  hover?: [string, string]
) => `
animation: none;
top: ${top};
left: 6%;
transition: .5s;
${color && "color: " + color[0] + ";"}
${color && "background: " + color[1] + ";"}
&:hover{
  ${hover && "color: " + hover[0] + ";"}
  ${hover && "background: " + hover[1] + ";"} 
}
`
