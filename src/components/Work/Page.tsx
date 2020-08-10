import React, { Fragment } from "react"
import styled from "styled-components"
import works, { workType } from "~/data/works"
import { NotFount, Header, Contents, BackButton } from "."
import "../index.css"
import Footer from "~/Parts/Footer"
import SEO from "~/components/SEO"
import { setSize } from "~/lib/scroll"
import { useWindowSize } from "~/lib/redux"

type Props = {
  className?: string
  name: string
}

const Component: React.FC<Props> = props => {
  const { className, name } = props
  const [work, setWork] = React.useState<workType | undefined>(() => {
    return works.find(e => e.name.toLowerCase() === name.toLowerCase())
  })
  const { state } = useWindowSize()
  const fontSize = setSize(state.type, ".75rem", ".7rem", ".65rem")
  const size = setSize(state.type, "4rem", "3.5rem", "3rem")
  const Page = work && (
    <Fragment>
      <SEO
        title={work.name}
        description={work.name + "のページです。" + work.briefDescription}
      />
      <Header url={work.backgroundImage} />
      <Contents work={work} />
      <Footer />
      <BackButton
        font={fontSize}
        size={size}
        position={backButtonPosition("calc(100% - 13%)")}
        text="BACK"
      />
      <a href={work.demo} rel="noopener noreferrer" target="_blank">
        <BackButton
          font={fontSize}
          size={size}
          position={backButtonPosition(
            "calc(100% - 23%)",
            ["#fff", "#6b62fd"],
            ["#6b62fd", "#fff"]
          )}
          text="DEMO"
          onClick={() => {}}
        />
      </a>
      <a href={work.github} rel="noopener noreferrer" target="_blank">
        <BackButton
          font={fontSize}
          size={size}
          position={backButtonPosition(
            "calc(100% - 33%)",
            ["#fff", "#000"],
            ["#000", "#fff"]
          )}
          text="Github"
          onClick={() => {}}
        />
      </a>
    </Fragment>
  )

  return (
    <div className={className}>{!work ? <NotFount name={name} /> : Page}</div>
  )
}

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
