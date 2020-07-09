import React from "react";
import styled from "styled-components";
import { worksType } from "~/data/works";
import { WorksItem } from ".";
import { CARD_SIZE } from "./WorksItem";
import { useDispatch, useSelector } from "react-redux"
import { actionCreator, RootState } from "~/store";
const MAX_ON_LINE = 4; // 一列に表示する最大個数

type Props = {
  className?: string;
  works: worksType;
};

const useRedux = () => {
  const state = useSelector((state: RootState) => ({
    select: state.style.select
  }));
  return { state }
}
const Component: React.FC<Props> = (props) => {
  const { state } = useRedux();
  const { select } = state;
  const { className, works } = props;
  const dispatch = useDispatch()
  const callBack = (index: number | null) => () => {

    dispatch(actionCreator.style.setImageSelect(index));
  };
  const mapWorks = works.map((work, index) => (
    <React.Fragment key={"work_id_" + work.name}>
      <WorksItem focus={(select && (select === index))} work={work} onMouseOut={callBack(null)} onMouseOver={callBack(index)} />
    </React.Fragment>
  ));

  return (
    <div className={className}>
      {mapWorks}
    </div>
  );
};

type StyledProps = {
  works: worksType;
};

export default styled(Component) <StyledProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: ${CARD_SIZE * MAX_ON_LINE}rem;
  @media screen and (min-width: ${CARD_SIZE * MAX_ON_LINE}rem){
    justify-content: left;
  }
  ${({ works }) => flexLeft(works)}

`;

const flexLeft = (works: any[]) => {
  let word = "";
  for (let i = 2; i <= MAX_ON_LINE; i++) {
    works.length % i && (word += `
    @media only screen and (min-width: ${CARD_SIZE * i}rem) and ( max-width: ${CARD_SIZE * (i + 1)}rem){
      justify-content: left;
      width: ${CARD_SIZE * i}rem;
    }`);
  };
  return word;
}