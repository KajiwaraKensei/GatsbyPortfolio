// ______________________________________________________
// 任意の場所にスクロールさせるボタン
import React from "react"
import BackButton from "~/components/Work/BackButton"
import { scroller } from "react-scroll"
import { scrollOption } from "~/lib/scroll"

// ______________________________________________________
// 型
type Props = {
  className?: string
  to: string // スクロール先
}

// ______________________________________________________
// コンポーネント
const Component: React.FC<Props> = props => {
  const { to } = props
  const doClick = () => {
    scroller.scrollTo(to, scrollOption)
  }
  return (
    <BackButton
      position={BackButtonStyle}
      size="4rem"
      font=".7rem"
      text="Next"
      onClick={doClick}
    />
  )
}

// ______________________________________________________
// スタイル(BackButton をオーバーロード)
const BackButtonStyle = `
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%)translateY(-75%);
  animation: none;
  transition: .5s;
  font-weight: 500;
  &:hover{
    background: #fff;
    color: #000;
  }
`

export default Component
