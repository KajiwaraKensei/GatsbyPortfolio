import React, { useState } from "react";
import styled from "styled-components";
import { worksType } from "~/data/works";
import { WorksItem } from ".";
import { CARD_SIZE } from "./WorksItem";
import { useDispatch, useSelector } from "react-redux"
import { actionCreator, RootState } from "~/store";
import { navigate } from "@reach/router"  
const MAX_ON_LINE = 4; // 一列に表示する最大個数

type Props = {
  className?: string;
  works: worksType;
  onCardClick?: () => void;
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
  const { className, works, onCardClick } = props;
  const dispatch = useDispatch();
  const [clickSelect, setClickSelect] = useState<number | null>(null);
  const callBack = (index: number | null) => () => {

    dispatch(actionCreator.style.setImageSelect(index));
    
  };

  const handleCardClick = (index: number) =>  () => {
    console.log(index);
    setClickSelect(clickSelect === null ? index : null);
    onCardClick && onCardClick();
    setTimeout(() => {
      navigate(`/work/${works[index].name}`)
    }, 1000);
    
  }
  const mapWorks = works.map((work, index) => (
    <React.Fragment key={"work_id_" + work.name}>
      <WorksItem opacity={clickSelect === null ? null : index === clickSelect ? 1 : 0} focus={(select && (select === index))} onClick={handleCardClick(index)} work={work} onMouseOut={callBack(null)} onMouseOver={callBack(index)} />
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
  height: 100%;

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