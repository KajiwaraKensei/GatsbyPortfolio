import React from "react"
import styled from "styled-components"
import SkillList from "./SkillsList"
import { Element } from "react-scroll"
import skills from "~/data/skills"
import { Hologram } from "~/icon"
import { setSize } from "~/lib/scroll"
import Next from "~/Parts/ScrollButton"
type Props = {
  className?: string
}

import { useSelector } from "react-redux"
import { RootState } from "~/store"
const useRedux = () => {
  const state = useSelector((state: RootState) => ({
    load: state.window.load,
    type: state.window.type,
  }))
  return { state }
}

const Component: React.FC<Props> = props => {
  const { className } = props
  const { state } = useRedux()
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
