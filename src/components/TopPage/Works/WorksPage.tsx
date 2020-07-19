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

const useRedux = () => {
  const state = useSelector((state: RootState) => ({
    select: state.style.select,
  }))
  return { state }
}

const Component: React.FC<Props> = props => {
  const { className } = props
  const { state } = useRedux()
  const [toggle, setToggle] = useState(false)
  const handleCardClick = () => {
    console.log("card click!")
    setToggle(!toggle)
  }
  return (
    <Element name="works">
      <div className={className}>
        <div className="work_background">
          {"　"}
          <div className="work_background_image">
            <Image
              filename={
                state.select !== null
                  ? works[state.select].backgroundImage
                  : "work.jpg"
              }
              width="100%"
              height="100%"
            />
          </div>
          <BottomBack toggle={toggle} />

          <h1 className="title">WORKS</h1>
        </div>

        <div className="works_list">
          <WorksList onCardClick={handleCardClick} works={works} />
        </div>
      </div>
    </Element>
  )
}

type BottomBack = {
  toggle?: boolean
}
const BottomBack = styled.div<BottomBack>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: ${({ toggle }) => (toggle ? `0` : `50%`)};
  width: 100vw;
  background-color: #fcfffc;
  transition: 0.5s;
`

export default styled(Component)`
  width: 100%;
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
      box-shadow: 0px -19px 20px 0px #00000052 inset;
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
      padding-top: 24vh;
      color: #fff;
      text-shadow: 0px 12px 20px #000;
      z-index: -5;
    }
  }

  & > .title {
    text-align: center;
  }
  & > .works_list {
    transform: translateY(-50vh);
    display: flex;
    justify-content: center;
  }
  margin-bottom: 20rem;
`
