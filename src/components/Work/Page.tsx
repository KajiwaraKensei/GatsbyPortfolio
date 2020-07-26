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
  const Page = work && (
    <Fragment>
      <SEO title={work.name} />
      <Header url={work.backgroundImage} />
      <Contents work={work} />
      <Footer />
      <BackButton
        font={setSize(state.type, ".9rem", ".7rem", ".65rem")}
        size={setSize(state.type, "4rem", "3.5rem", "3rem")}
        position={backButtonPosition}
        text="HOME"
      />
    </Fragment>
  )

  return (
    <div className={className}>{!work ? <NotFount name={name} /> : Page}</div>
  )
}

export default styled(Component)`
  color: #000;
`

const backButtonPosition = `
animation: none;
top: calc(100vh - 6rem);
left: 1.5rem;
`
