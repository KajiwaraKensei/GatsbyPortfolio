// ______________________________________________________
// スキル紹介 - まとめ
import React from "react"
import styled from "styled-components"
import { Element } from "react-scroll"
import skills from "~/data/skills"
import Next from "~/Parts/ScrollButton"
import { useWindowSize } from "~/lib/redux"
import { setSize } from "~/lib/scroll"
import { Hologram } from "~/icon"
import SkillList from "./SkillsList"

// ______________________________________________________
// 型
type Props = {
  className?: string
}

// ______________________________________________________
// コンポーネント
const Component: React.FC<Props> = props => {
  const { className } = props
  const { state } = useWindowSize()
  return (
    <Element name="skills">
      <div className={className}>
        <h1>SKILLS</h1>
        <SkillList skills={skills} />
        <Hologram
          style={HologramIcon}
          size={setSize(state.type, 300, 250, 200)}
        />
        <Next to="works" />
      </div>
    </Element>
  )
}

// ______________________________________________________
// スタイル
export default styled(Component)`
  position: relative;
  & h1 {
    &:after {
      content: "";
      border-bottom: solid 1px #9f9ae7;
      display: block;
      width: 5rem;
      margin: 10px auto;
    }
  }
  text-align: center;
  padding: 3rem 2rem;
  color: #fff;
`

const HologramIcon = `
position: absolute;
bottom: 4rem;
right: 4rem;
z-index: -1;
`
