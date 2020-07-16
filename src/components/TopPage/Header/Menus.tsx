import React from "react";
import styled from "styled-components";
import { scroller } from 'react-scroll';
import { scrollOption } from "~/lib/scroll";
type Props = {
  className?: string;
};

const Component: React.FC<Props> = (props) => {
  const { className } = props;
  const clickDetail = (to: string) => (event: React.MouseEvent) => {
    scroller.scrollTo(to, scrollOption)
  }

  return (
    <div className={className}>
      <div>
        <div>PORTFOLIO</div>
        <div onClick={clickDetail("skills")}>SKILLS</div>
        <div onClick={clickDetail("works")}>WORKS</div>
        <div>CONTACT</div>
      </div>

    </div>
  );
};

export default styled(Component)`
  display: flex;
  justify-content: center;
  width: 100%;
  & > div {
    width: 100%;
    max-width: 40rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 2rem 0 0;
    & > div{
      font-weight: bold;
      padding: 1rem 1rem;
      margin: 1rem 1rem 0;
      transition: 0.5s;
      cursor: pointer;
      border-bottom: 2px solid #fff;
      &:hover {
        background-color: #ddd;
        color: #000;
        border-bottom: 2px solid #fa9;
        border-radius: .5rem .5rem 0 0;
      }
    }

  }
`;
