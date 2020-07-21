import React from "react"
import styled from "styled-components"
import { workType } from "~/data/works"
import { copy } from "~/lib/style"

type Props = {
  className?: string
  work: workType
  onClick?: () => void
  onMouseOver?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  onMouseOut?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export const CARD_SIZE = 20

const Component: React.FC<Props> = props => {
  const { className, work, onMouseOver, onMouseOut, onClick } = props
  const { name, icon, briefDescription } = work

  return (
    <div className={className}>
      <h3 className="work_name">{name}</h3>
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

export default styled(Component)<{ opacity?: string | number }>`
  padding: 2rem 0;
  color: #fff;
  flex-basis: 100%;
  text-align: center;
  transition: calc(700ms * 1.5) cubic-bezier(0.19, 1, 0.22, 1);
  h3 {
    display: inline-block;
    width: 100%;
    background-color: #000000a1;
    padding: 1rem;
    margin: 0;
  }
  & .work_image {
    width: 100%;
    height: ${CARD_SIZE}rem;
    cursor: pointer;
    & img {
      width: 100%;
      height: 100%;

      object-fit: cover;
    }
  }

  .work_copy {
    ${copy}
    width: 100%;
    background-color: #000000a1;
    padding: 1rem;
  }
  ${({ opacity }) => opacity != null && `opacity: ${opacity};`}
`
