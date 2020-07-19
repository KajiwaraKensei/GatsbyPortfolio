import React from "react"
import styled from "styled-components"
import profile from "~/data/profile"
type Props = {
  className?: string
}

const Component: React.FC<Props> = props => {
  const { className } = props
  return <div className={className}>
    <p>© {profile.name} ALL RIGHTS RESERVED</p>
  </div>
}

export default styled(Component)`
font-weight: 150;
font-size: .8rem;
display: flex;
justify-content: center;
align-items: center;
color: #fff;
min-height: 5rem;
background-color: #000;
text-align: center;
`
