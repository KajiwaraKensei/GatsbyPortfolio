// ______________________________________________________
// Workページ　default
import React, { useState } from "react"
import styled from "styled-components"
import { WorksList } from "."
import works from "~/data/works"
import Image from "~/Parts/Image"
import { Element } from "react-scroll"
import { fadeIn } from "~/lib/style"
import { useSelector } from "react-redux"
import { RootState } from "~/store"

type Props = {
  className?: string
}
// Redux
const useRedux = () => {
  const state = useSelector((state: RootState) => ({
    select: state.style.select,
  }))
  return { state }
}

// ______________________________________________________
//
const Component: React.FC<Props> = props => {
  const { className } = props
  const { state } = useRedux()
  const [toggle, setToggle] = useState(false)

  // カードクリック時のイベント
  const handleCardClick = () => {
    setToggle(!toggle)
  }

  return (
    <Element name="works">
      <div className={className}>
        <div className="work_background">
          {"　"}
          <div className="work_background_image">
            <Image
              className={state.select === null ? "work_bg_img" : undefined}
              filename={
                state.select !== null
                  ? works[state.select].backgroundImage
                  : "joshua-ness-9iqqFZ7OuwY-unsplash.jpg"
              }
              width="100%"
              height="100%"
              alt="works_background_image"
            />
          </div>
          <BottomBack toggle={toggle} />
          <div className="work_head_title">
            {state.select === null && <h1 className="title">WORKS</h1>}
          </div>
        </div>

        <div className="works_list">
          <WorksList onCardClick={handleCardClick} works={works} />
        </div>
      </div>
    </Element>
  )
}

// ______________________________________________________
// 背景
type BottomBack = {
  toggle?: boolean
}
const BottomBack = styled.div<BottomBack>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: ${({ toggle }) => (toggle ? `0` : `50%`)};
  width: 100vw;
  background-color: #fefffe;
  transition: 0.5s;
`

// ______________________________________________________
// スタイル
export default styled(Component)`
  width: 100%;

  .work_bg_img {
    & img {
      object-position: 50% 50% !important;
      filter: brightness(110%);
    }
  }
  & > .work_background {
    height: 100vh;
    position: relative;
    width: 100%;
    & .work_background_image {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
    }

    & img {
      animation: ${fadeIn} 1s forwards;
      z-index: -5;
    }
    position: sticky;
    top: 0;
    left: 0;
    z-index: -10;
    & h1 {
      text-align: center;
      color: #000;
      font-weight: 200;
      letter-spacing: 0.3em;
      font-size: 1.5rem;
      z-index: -5;
      &:after {
        content: "";
        border-top: solid 1px #9f9ae7;
        display: block;
        width: 55px;
        margin: 10px auto;
      }
    }
  }
  .work_head_title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
  }
  & > .title {
    text-align: center;
  }
  & > .works_list {
    transform: translateY(-50vh);
    overflow: hidden;
    display: flex;
    justify-content: center;
  }
`
