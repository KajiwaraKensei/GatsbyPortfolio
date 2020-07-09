import React from "react";
import styled from "styled-components";
import SkillList from "./SkillsList"
import { Element } from "react-scroll"
type Props = {
  className?: string;
}

const Component: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <Element name="skills">
      <div className={className}>
        <h2>SKILLS</h2>
        <SkillList skills={[
          { name: "JavaScript", proficiencyLevel: 24, description: "It was the first thing I learned and the first thing that inspired me to create a web app.", works: [] },
          { name: "TypeScript", proficiencyLevel: 75, description: "It's my favorite programming language. I would like to use it actively.", works: [] },
          { name: "React.JS", proficiencyLevel: 65, description: "This is my favorite of all the JavaScript libraries.", works: [] },
          { name: "Next.JS", proficiencyLevel: 75, description: "I'm hoping to learn Gatsby next.", works: [] },
          { name: "PHP", proficiencyLevel: 100, description: "Just enough to remember the grammar.", works: [] }
        ]} />
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