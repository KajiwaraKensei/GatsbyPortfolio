import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import profile from "~/data/profile"
type Props = {
  className?: string
}

const Component: React.FC<Props> = props => {
  const { className } = props
  return <div className={className}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{profile.name[0]}’s portfolio</title>
    </Helmet>
  </div>
}

export default styled(Component)``
