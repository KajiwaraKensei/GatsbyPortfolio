import React from "react"
import styled from "styled-components"

type Props = {
  className?: string
  size?: number
}
const ICON_SIZE = 500
const Component: React.FC<Props> = props => {
  const { className, size } = props
  return (
    <svg
      className={className}
      width={size || ICON_SIZE}
      height={(size || ICON_SIZE) * 0.75}
    ></svg>
  )
}

export default styled(Component)<{ style?: string }>`
  ${({ style }) => style}
`
