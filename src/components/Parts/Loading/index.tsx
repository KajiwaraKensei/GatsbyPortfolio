// ______________________________________________________
// loading画面

import React from "react"
import "./style.css"
import { Coffee } from ".."
type Props = {
  load: boolean
}

const Component: React.FC<Props> = props => {
  const { load } = props
  return (
    <div className={`loading ${load ? "" : " end"}`}>
      <Coffee />
    </div>
  )
}

export default Component
