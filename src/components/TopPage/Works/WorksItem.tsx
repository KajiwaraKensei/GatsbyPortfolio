// ______________________________________________________
// Worksの1つ1つ
import React from "react"
import styled, { css } from "styled-components"
import { workType } from "~/data/works"
import Image from "~/Parts/Image"
export const CARD_SIZE = 24

// ______________________________________________________
// 型
type Props = {
  className?: string
  work: workType
  onMouseOver?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  onMouseOut?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  onClick?: () => void
} & StyledProps

type StyledProps = {
  focus?: boolean | 0 | null // フォーカスが当たっているか
  opacity?: string | number // 透明度指定
  animation: boolean // アニメーションをするか
}
// ______________________________________________________
// コンポーネント
const Component: React.FC<Props> = props => {
  const { className, work, onMouseOver, onMouseOut, onClick } = props
  const { name, icon, platform } = work
  return (
    <div className={className}>
      <div className="work_image">
        <div
          className="work_wrap"
          onClick={onClick}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
        >
          <Image
            width={"100%"}
            height={"100%"}
            filename={icon}
            alt={work.name + "のアイコン"}
          />

        </div>
        <p className="brief_description" >
          <span>
            {work.briefDescription}
          </span>
        </p>

        <p className="work_name">
          <span>{name}</span>
          <span>{platform}</span>
        </p>
      </div>
    </div>
  )
}

// ______________________________________________________
// スタイル
export default styled(Component) <StyledProps>`
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
    width: ${CARD_SIZE - 7}rem;
    height: ${CARD_SIZE - 7}rem;
    margin: 3.5rem;
    transition: calc(700ms * 1.5) cubic-bezier(0.19, 1, 0.22, 1);
    pointer-events: none;
    box-shadow: 2px 2px 15px 5px #0000003d;
    & div {
      width: 100%;
      height: 100%;
      transition: calc(700ms * 1.5) cubic-bezier(0.19, 1, 0.22, 1);
      pointer-events: auto;
      object-fit: cover;
      cursor: pointer;
      margin: 0 auto;
    }
  }
  .brief_description{
    margin: none;
    color: #000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .2s;
    ${({ focus }) => focus ? css`
    width: ${CARD_SIZE - 5}rem;
    height: ${CARD_SIZE - 5}rem;

      background-color: #00000022;
    `: css`
    width: ${CARD_SIZE - 6.9}rem;
    height: ${CARD_SIZE - 6.9}rem;

    `}
    &>span{

      display: block;
      transition:  .2s;
      color: #fff;
      width: ${CARD_SIZE - 5.5}rem;
      height: ${CARD_SIZE - 5.5}rem;
      padding: .5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      ${({ focus }) => focus ? css`
        transform: translateY(0%);
        opacity: 1;
      `: css`
        transform: translateY(100px);
        opacity: 0;
      `}
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
  }

  & .work_image:hover {
    width: ${CARD_SIZE - 5}rem;
    height: ${CARD_SIZE - 5}rem;
    margin: 2.5rem;
    z-index: 2;
    transition:  .2s;
  }
  ${({ opacity }) => opacity != null && `opacity: ${opacity};`}
`
