// ______________________________________________________
// loading画面

import React from "react"
import "./styles.css"
import { Coffee } from ".."

type Props = {
  load: boolean //true: ロード中
}

const Component: React.FC<Props> = props => {
  const { load } = props
  return (
    <div className={`loading ${load ? "" : " end"}`}>
      <Coffee size={40} />
    </div>
  )
}

export default Component
