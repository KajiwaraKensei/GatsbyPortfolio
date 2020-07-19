import React from "react"
import styled from "styled-components"
import SkillCard, { Skill } from "./SkillCard"

type Props = {
  className?: string
  skills: Skill[]
}

const Component: React.FC<Props> = props => {
  const { className, skills } = props
  const mapSkills = skills.map((skill, i) => (
    <React.Fragment key={"skill_card_" + skill.name}>
      <SkillCard skill={skill} index={i} />
    </React.Fragment>
  ))
  return <div className={className}>{mapSkills}</div>
}

export default styled(Component)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
