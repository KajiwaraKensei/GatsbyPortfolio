import React from "react"
import styled from "styled-components"
import { customBlinking } from "~/lib/style"
import { navigate } from "@reach/router"

type Props = {
  className?: string
  text?: string
  onClick?: () => void
}

const DEFAULT_SIZE = "5rem"

const Component: React.FC<Props> = props => {
  const { className, text, onClick } = props
  const gotoHome = () => {
    onClick ? onClick() : navigate(`/`)
  }
  return (
    <div onClick={gotoHome} className={className}>
      {text || "HOME"}
    </div>
  )
}

export default styled(Component)<{
  position?: string
  size?: string
  font?: string
}>`
  font-size: ${({ font }) => font || "1em"};
  color: #fff;
  position: fixed;
  top: 3rem;
  right: 5%;
  background: #fb496d;
  border-radius: ${({ size }) => size || DEFAULT_SIZE};
  width: ${({ size }) => size || DEFAULT_SIZE};
  height: ${({ size }) => size || DEFAULT_SIZE};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  animation: ${customBlinking(["#fff", "#fb496d"], ["#000", "#fff"])} 2s
    infinite;
  cursor: pointer;
  z-index: 999;
  box-shadow: -1px 1px 4px 1px #00000069;
  &:hover {
    color: #fb496d;
    background: #fff;
  }
  ${({ position }) => position}
`
