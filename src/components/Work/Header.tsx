import React from "react"
import styled from "styled-components"
import Image from "~/Parts/Image"
type Props = {
  className?: string
  url?: string
}

const Component: React.FC<Props> = props => {
  const { className, url } = props
  return (
    <div className={className}>
      <Image alt="header_画像" width={"100%"} height={"100%"} filename={url || "01f.jpg"} />
    </div>
  )
}

export default styled(Component)`
  position: fixed;
  z-index: -10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`
