import React from "react"
import styled from "styled-components"
type Props = {
  className?: string
}
const headers = {
  ContentType: "application/json;charset=utf-8",
  AccessControlAllowOrigin: "*",
}
const Component: React.FC<Props> = props => {
  const { className } = props
  const sendAPI = () => {}
  return (
    <div className={className}>
      Message
      <button onClick={sendAPI}>hoge</button>
    </div>
  )
}

export default styled(Component)``
