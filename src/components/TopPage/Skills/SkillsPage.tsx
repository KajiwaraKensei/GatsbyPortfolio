import React from "react";
import styled from "styled-components";
import SkillList from "./SkillsList"
import { Element } from "react-scroll";
import skills from "~/data/skills";
type Props = {
  className?: string;
}

const Component: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <Element name="skills">
      <div className={className}>
        <h2>SKILLS</h2>
        <SkillList skills={skills} />
      </div>
    </Element>
  )
}

export default styled(Component)`
  text-align: center;
  padding: 5rem 2rem;

  h2{
    font-size: 2rem;
    margin: 0 0 3rem;
  }
`;