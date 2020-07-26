// ______________________________________________________
// Worksの1つ1つ
import React from "react"
import styled from "styled-components"
import { workType } from "~/data/works"

export const CARD_SIZE = 24

type Props = {
  className?: string
  work: workType
  onMouseOver?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  onMouseOut?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  onClick?: () => void
} & StyledProps

// ______________________________________________________
//
const Component: React.FC<Props> = props => {
  const { className, work, onMouseOver, onMouseOut, onClick } = props
  const { name, icon, platform } = work
  return (
    <div className={className}>
      <div className="work_image">
        <img
          src={icon}
          onClick={onClick}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
        />
        <h4 className="work_name">
          <span>{name}</span>
          <span>{platform}</span>
        </h4>
      </div>
    </div>
  )
}

// ______________________________________________________
// スタイル
type StyledProps = {
  focus?: boolean | 0 | null // フォーカスが当たっているか
  opacity?: string | number // 透明度指定
  animation: boolean // アニメーションをするか
}
export default styled(Component)<StyledProps>`
  pointer-events: none;
  ${({ focus }) =>
    focus === false
      ? `
  opacity: .5;
  `
      : `
  color: #fff;
  `}
  width: ${CARD_SIZE}rem;
  height: ${CARD_SIZE}rem;
  padding: 1rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: calc(700ms * 1.5) cubic-bezier(0.19, 1, 0.22, 1);
  position: relative;
  .work_image {
    width: ${CARD_SIZE}rem;
    height: ${CARD_SIZE}rem;
    padding: 3.5rem;
    transition: calc(700ms * 1.5) cubic-bezier(0.19, 1, 0.22, 1);
    pointer-events: none;
    & img {
      background-color: #fff;
      width: 100%;
      height: 100%;
      transition: calc(700ms * 1.5) cubic-bezier(0.19, 1, 0.22, 1);
      pointer-events: auto;
      object-fit: cover;
      cursor: pointer;
      margin: 0 auto;
    }
  }

 .work_name {
    color: #000;
    margin: 0;
    width: 100%;
    padding: .5rem .5rem;
    pointer-events: none;
    transition: opacity calc(700ms * 1.5) cubic-bezier(0.19, 1, 0.22, 1);
    font-size: .8rem;
    line-height: 1.1;
    letter-spacing: 0.02em;
    display: flex;
    justify-content: space-between;
    & > span:last-child{
      color: #0099bd;
    }
  }

  & .work_image:hover {
    padding: 2.5rem;
    z-index: 2;
    transition: calc(700ms * 1.5) cubic-bezier(0.19, 1, 0.22, 1);
  }
  ${({ opacity }) => opacity != null && `opacity: ${opacity};`}
`
