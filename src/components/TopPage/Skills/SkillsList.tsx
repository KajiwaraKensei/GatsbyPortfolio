// ______________________________________________________
// スキル紹介 - リスト
import React from "react"
import styled from "styled-components"
import SkillCard, { Skill } from "./SkillCard"

// ______________________________________________________
// スキル紹介
type Props = {
  className?: string
  skills: Skill[]
}

// ______________________________________________________
// コンポーネント
const Component: React.FC<Props> = props => {
  const { className, skills } = props
  const mapSkills = skills.map((skill, i) => (
    <React.Fragment key={"skill_card_" + skill.name}>
      <SkillCard skill={skill} index={i} />
    </React.Fragment>
  ))
  return <div className={className}>{mapSkills}</div>
}

// ______________________________________________________
// スタイル
export default styled(Component)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
