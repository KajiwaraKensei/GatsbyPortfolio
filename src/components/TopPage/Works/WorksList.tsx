// ______________________________________________________
// Works を展開して表示
import React, { useState } from "react"
import styled from "styled-components"
import { worksType } from "~/data/works"
import { WorksItem } from "."
import { CARD_SIZE } from "./WorksItem"
import { useDispatch, useSelector } from "react-redux"
import { actionCreator, RootState } from "~/store"
import { navigate } from "@reach/router"

const MAX_ON_LINE = 4 // 一列に表示する最大個数

// ______________________________________________________
// 型
type Props = {
  className?: string
  works: worksType
  onCardClick?: () => void // カードをクリックしたときの処理
}
type StyledProps = {
  works: worksType
}

// Redux の設定
const useRedux = () => {
  const state = useSelector((state: RootState) => ({
    select: state.style.select,
    type: state.window.type,
  }))
  const dispatch = useDispatch()
  return { state, dispatch }
}

// ______________________________________________________
// コンポーネント
const Component: React.FC<Props> = props => {
  const { state, dispatch } = useRedux()
  const { select, type } = state
  const { className, works, onCardClick } = props

  const [clickSelect, setClickSelect] = useState<number | null>(null) // ホバーしている要素
  const [animation, setAnimation] = useState(false) // 子要素のアニメーションをするかどうか
  const callBack = (index: number | null) => () => {
    animation || dispatch(actionCreator.style.setImageSelect(index))
  }
  React.useEffect(() => {
    dispatch(actionCreator.style.setImageSelect(null))
  }, [])

  // カードをクリックした時
  const handleCardClick = (index: number) => () => {
    setClickSelect(clickSelect === null ? index : null)
    onCardClick && onCardClick()
    setAnimation(true) // 子要素に遷移時のアニメーションを適応

    // １秒後に遷移
    setTimeout(() => {
      navigate(`/work/${works[index].name}`)
    }, 1000)
  }

  const mapWorks = works.map((work, index) => (
    <React.Fragment key={"work_id_" + work.name}>
      <WorksItem
        opacity={
          clickSelect === null ? undefined : index === clickSelect ? 1 : 0
        }
        focus={select !== null ? select === index : undefined}
        onClick={handleCardClick(index)}
        work={work}
        onMouseOut={callBack(null)}
        onMouseOver={callBack(index)}
        animation={animation}
      />
    </React.Fragment>
  ))

  return <div className={className}>{mapWorks}</div>
}



// ______________________________________________________
// スタイル
export default styled(Component) <StyledProps>`
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  max-width: ${CARD_SIZE * MAX_ON_LINE}rem;
  @media screen and (min-width: ${CARD_SIZE * MAX_ON_LINE}rem) {
    justify-content: left;
  }
  ${({ works }) => flexLeft(works)}
`

// justify-contents: center と space-around の中間
const flexLeft = (works: any[]) => {
  let word = ``
  for (let i = 2; i <= MAX_ON_LINE; i++) {
    works.length % i &&
      (word += `
    @media only screen and (min-width: ${CARD_SIZE * i}rem) and ( max-width: ${
        CARD_SIZE * (i + 1)
        }rem){
      justify-content: left;
      width: ${CARD_SIZE * i}rem;
    }`)
  }
  return word
}
