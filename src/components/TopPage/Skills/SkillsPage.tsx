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
        <h1>SKILLS</h1>
        <SkillList skills={skills} />
      </div>
    </Element>
  )
}

export default styled(Component)`
  & h1{
    &:after {
        content: " ";
        border-bottom: solid 1px #9f9ae7;
        display: block;
        width: 5rem;
        margin: 10px auto;
      }
  }
  text-align: center;
  padding: 3rem 2rem;
  background-color: #000;
  color: #fff;
 
`;