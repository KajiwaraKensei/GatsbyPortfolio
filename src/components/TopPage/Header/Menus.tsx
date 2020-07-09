import React from "react";
import styled from "styled-components";
import { scroller } from 'react-scroll';
import { scrollOption } from "~/lib/scroll";
type Props = {
  className?: string;
};

const Component: React.FC<Props> = (props) => {
  const { className } = props;
  const clickDetail = (event: React.MouseEvent) => {
    scroller.scrollTo("skills", scrollOption)
  }

  return (
    <div className={className}>
      <div>PORTFOLIO</div>
      <div onClick={clickDetail}>SKILLS</div>
      <div>WORKS</div>
      <div>CONTACT</div>
    </div>
  );
};

export default styled(Component)`
  display: flex;
  justify-content: space-around;
  & > div {
    font-weight: bold;
    padding: 2rem 3rem;
    margin: 1rem auto;
    transition: 0.5s;
    border-bottom: 5px inset #eee;
    border-radius: 1rem;
    &:hover {
      cursor: pointer;
      border-bottom: 5px outset #aaa;
    }
  }
`;
