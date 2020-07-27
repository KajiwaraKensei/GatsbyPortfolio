// ______________________________________________________
//
import React from "react"
import App from "~/components/App"
import SEO from "~/components/SEO"
import styled from "styled-components"
import profile from "~/data/profile"

interface Props {
  className?: string
}
// ______________________________________________________
//
const Component: React.FC<Props> = props => (
  <div className={props.className}>
    <SEO title={`${profile.name[0]}’s portfolio`} description={`${profile.name[0]}’s portfolio site. ` + profile.selfIntroduction} />
    <App />
  </div>
)
export default styled(Component)`
  max-width: 100vw;
  min-height: 100vh;
`
