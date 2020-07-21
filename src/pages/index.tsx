import React from "react"
import App from "~/components/App"
import SEO from "~/components/SEO"
import styled from "styled-components"

interface Props {
  className?: string
}

const Component: React.FC<Props> = props => (
  <div className={props.className}>
    <SEO />
    <App />
  </div>
)
export default styled(Component)`
  max-width: 100vw;
  min-height: 100vh;
`
