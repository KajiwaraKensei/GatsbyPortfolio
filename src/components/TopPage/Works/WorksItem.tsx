import React from "react";
import styled from "styled-components";
import { workType } from "~/data/works";
import { copy } from "~/lib/style";
import Img from "~/Parts/Image"
export const CARD_SIZE = 20;

type Props = {
  className?: string;
  work: workType;
  onMouseOver?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseOut?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onClick?: () => void;
} & StyledProps;

const Component: React.FC<Props> = (props) => {
  const { className, work, onMouseOver, onMouseOut, onClick } = props;
  const { name, icon, briefDescription } = work;
  return (
    <div className={className}>
      <h4 className="work_name">{name}</h4>
      <img src={icon} onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut} />
      <p className="work_copy">{briefDescription}</p>
    </div>
  )
}


type StyledProps = {
  focus?: boolean | 0 | null;
  opacity?: string | number;
}
export default styled(Component) <StyledProps>`
  pointer-events:none;
  ${({ focus }) => focus === false ? `
  opacity: .5;
  `: `
  color: #fff;
  ` }
  overflow: hidden;
  width: ${CARD_SIZE}rem;
  min-height: ${CARD_SIZE}rem;
  padding: 1rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: calc(700ms * 1.5) cubic-bezier(0.19, 1, 0.22, 1);
  &  img{
    transition: calc(700ms * 1.5) cubic-bezier(0.19, 1, 0.22, 1) !important;
    pointer-events : auto;
    width: ${CARD_SIZE - 2}rem !important;
    height: ${CARD_SIZE - 2}rem !important;
    object-fit: cover;
    cursor: pointer;
    margin: 0 auto !important;
  }



  & > .work_name, & > .work_copy{
    pointer-events:none;
    opacity: 0;
    text-align: center;
    transition: opacity calc(700ms * 1.5) cubic-bezier(0.19, 1, 0.22, 1);
  }

  & > .work_name{
    margin-bottom: 1rem;
    font-family: 'Vesterbro poster', sans-serif;
    font-size: 1.5rem;
    line-height: 1.1;
    font-weight: 400;
    letter-spacing: -0.02em;
  }

  & > .work_copy{
    padding-top: 1rem;
    ${copy}
  }

  &:hover{
    margin-bottom: 0rem;
    padding: .5rem .5rem 1rem;
    & > .work_name, & > .work_copy{
      opacity: 1;
    }
  }

  & img:hover{
    height: ${CARD_SIZE}rem !important;
    width:100% !important;
  }
  ${({ opacity }) => opacity != null && `opacity: ${opacity};`}
  


`;