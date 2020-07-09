import React from "react";
import styled from "styled-components";
import Header from "~/components/TopPage/Header";
import Profile from "~/components/TopPage/Profile";
import Skills from "~/components/TopPage/Skills";
import Works from "~/components/TopPage/Works";
import LoopBackGround from "components/Parts/LoopsBackground";
import { useSelector } from "react-redux"
import { RootState } from "~/store";

import works from "~/data/works";


type Props = {
  className?: string;
};

const useRedux = () => {
  const state = useSelector((state: RootState) => ({
    select: state.style.select
  }));
  return { state }
}

const Component: React.FC<Props> = (props) => {
  const { className } = props;
  const { state } = useRedux();
  return (
    <div className={className}>
      {state.select !== null && <LoopBackGround images={works[state.select].images} />}
      <Header />
      <Profile />
      <Skills />
      <Works />
    </div>
  );
};


export default styled(Component)`
  width: 100%;
  min-height: 100vh;
  transition: calc(700ms * 1.5) cubic-bezier(0.19, 1, 0.22, 1);
`;
