import React from "react"
import styled from "styled-components"
import profile from "~/data/profile"
import { scrollToTop } from "~/lib/scroll"
type Props = {
  className?: string
}

const Component: React.FC<Props> = props => {
  const { className } = props
  return (
    <div className={className}>
      <p>© {profile.name} ALL RIGHTS RESERVED</p>
      <button onClick={scrollToTop}>top</button>
    </div>
  )
}

export default styled(Component)`
  font-weight: 150;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  min-height: 5rem;
  background-color: #000;
  text-align: center;
  position: relative;
  &::after {
    position: absolute;
    bottom: 1rem;
    left: 0;
    content: "";
    height: 1px;
    background: linear-gradient(to bottom right, #ffffff1a, #789bff96);
    display: block;
    width: 100%;
  }
`
