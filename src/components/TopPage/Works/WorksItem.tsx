import React from "react"
import styled from "styled-components"
import { workType } from "~/data/works"
import { copy } from "~/lib/style"
import { fadeIn, customFadeIn } from "~/lib/style"

export const CARD_SIZE = 20

type Props = {
  className?: string
  work: workType
  onMouseOver?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  onMouseOut?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  onClick?: () => void
} & StyledProps

const Component: React.FC<Props> = props => {
  const { className, work, onMouseOver, onMouseOut, onClick } = props
  const { name, icon, briefDescription } = work
  return (
    <div className={className}>
      <h4 className="work_name">{name}</h4>
      <div className="work_image">
        <img
          src={icon}
          onClick={onClick}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
        />
      </div>

      <p className="work_copy">{briefDescription}</p>
    </div>
  )
}

type StyledProps = {
  focus?: boolean | 0 | null
  opacity?: string | number
  animation: boolean
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
  overflow: hidden;
  width: ${CARD_SIZE}rem;
  min-height: ${CARD_SIZE}rem;
  padding: 1rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: calc(700ms * 1.5) cubic-bezier(0.19, 1, 0.22, 1);
  position: relative;
  .work_image {
    width: ${CARD_SIZE - 2}rem;
    height: ${CARD_SIZE - 2}rem;
    transition: calc(700ms * 1.5) cubic-bezier(0.19, 1, 0.22, 1);

    & img {
      width: 100%;
      height: 100%;
      transition: calc(700ms * 1.5) cubic-bezier(0.19, 1, 0.22, 1);
      pointer-events: auto;
      object-fit: cover;
      cursor: pointer;
      margin: 0 auto;
    }
  }

  & > .work_name,
  & > .work_copy {
    position: absolute;
    left: 0;
    right: 0;
    pointer-events: none;
    opacity: 0;
    text-align: center;
    transition: opacity calc(700ms * 1.5) cubic-bezier(0.19, 1, 0.22, 1);
  }

  & > .work_name {
    top: 0rem;
    margin-bottom: 1rem;
    font-family: "Vesterbro poster", sans-serif;
    font-size: 1.5rem;
    line-height: 1.1;
    font-weight: 400;
    letter-spacing: -0.02em;
  }

  & > .work_copy {
    top: 6rem;
    padding-top: 1rem;
    ${copy}
  }

  &:hover {
    margin-bottom: 0rem;
    padding: 0.5rem 0.5rem 1rem;
    position: relative;
    & > .work_name,
    & > .work_copy {
      opacity: 1;
      z-index: 3;
    }
  }

  & .work_image:hover {
    height: ${CARD_SIZE}rem;
    width: 100%;
    display: inline-block;
    position: relative;
    z-index: 2;
    ${({ animation }) =>
      !animation &&
      `&:before {
    content: "";
    background: #00000094;
    filter: grayscale(20%);
    position: absolute;
    top: 0;
    left: 0rem;
    right: 0rem;
    bottom: 0rem;
    z-index: 2;
  }`}
  }

  @media screen and (max-width: 700px) {
    & > .work_name,
    & > .work_copy {
      opacity: 1;
      z-index: 3;
    }
    .work_image {
      ${({ animation }) =>
        !animation &&
        `&:before {
    content: "";
    background: #00000094;
    filter: grayscale(20%);
    position: absolute;
    top: 1rem;
    left: 1rem;
    right: 1rem;
    bottom: 1rem;
    z-index: 2;
  }`}
    }
  }
  ${({ opacity }) => opacity != null && `opacity: ${opacity};`}
`
