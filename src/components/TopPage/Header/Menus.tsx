import React, { useState } from "react";
import styled from "styled-components";
import { scroller } from 'react-scroll';
import { scrollOption } from "~/lib/scroll";
import { Contact } from "."
import { profile } from "~/data/profile";
type Props = {
  className?: string;
  profile: profile
};

const Component: React.FC<Props> = (props) => {
  const { className, profile } = props;
  const clickDetail = (to: string) => (event: React.MouseEvent) => {
    scroller.scrollTo(to, scrollOption)
  }
  const [contactToggle, setContactToggle] = useState(false)
  const clickContact = () => {
    setContactToggle(!contactToggle)
  }
  return (
    <div className={className}>
      <div className="menu_buttons">
        <div onClick={clickDetail("profile")}>PORTFOLIO</div>
        <div onClick={clickDetail("skills")}>SKILLS</div>
        <div onClick={clickDetail("works")}>WORKS</div>
        <div onClick={clickContact}>CONTACT</div>
      </div>
      <Contact display={contactToggle} profile={profile} />
    </div>
  );
};

export default styled(Component)`
  & > .menu_buttons {
    width: 100%;
    max-width: 40rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 2rem 0 0;
    margin: 0 auto;
    & > div{
      padding: 1rem 1rem .75rem;
      margin: 1rem;
      transition: 0.25s;
      cursor: pointer;
      border-bottom: 2px solid #39ffd14d;
      &:hover {
        background-color: #ffffff2e;
        border-bottom: 2px solid #39edff;
        border-radius: .5rem .5rem 0 0;
      }
    }
  }
  
`;
