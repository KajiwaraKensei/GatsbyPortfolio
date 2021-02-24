// ______________________________________________________
// ヘッダー
import React from "react"
import styled, { keyframes } from "styled-components"
import { Menus } from "."
import profile from "~/data/profile"
import { HomeIcon } from "~/icon"
import { scroller } from "react-scroll"
import { scrollOption, setSize } from "~/lib/scroll"
import { useWindowSize } from "~/lib/redux"

// ______________________________________________________
// 型
type Props = {
  className?: string
}

// ______________________________________________________
// コンポーネント
const Component: React.FC<Props> = props => {
  const { className } = props
  const { state } = useWindowSize()
  return (
    <header className={className}>
      <div className="profile_background">
        <HomeIcon
          size={setSize(state.type, 900, 750, 750)}
          style={HomeIconStyle}
        />
      </div>

      <div className="wrap">
        <div className="header_main">
          <h1>{profile.name}'s Portfolio</h1>
        </div>
        <div className="header_subtitle">
          <div></div>
        </div>
        <div className="header_menus">
          <Menus profile={profile} />
        </div>
      </div>
      <NextButton
        onClick={() => {
          scroller.scrollTo("profile", scrollOption)
        }}
      >
        <LowerTriangle />
        <LowerTriangle delay={0.9} />
      </NextButton>
    </header>
  )
}

// ______________________________________________________
// 三角形SVG
const loop = keyframes`
   0% {
    opacity: 0;
    transform: translateX(-50%)translateY(-150%);
  } 
  33%, 66%{
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateX(-50%)translateY(100%);
  }
`
// 下三角SVG
const LowerTriangleComponent = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="18"
    height="9"
    viewBox="0, 0, 50, 25"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polyline points="0,0 25,25 50,0" stroke="#fff" fill="none" />
  </svg>
)
// 下三角のスタイル
const LowerTriangle = styled(LowerTriangleComponent) <{
  delay?: number | string
}>`
  animation: ${loop} 1.8s cubic-bezier(0, 0, 1, 1) ${({ delay }) => delay || 0}s
    infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 0;
`

// ______________________________________________________
// スタイル
const NextButton = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  color: #fff;
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: 150;
  cursor: pointer;
  padding: 0.5rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  transition: calc(700ms * 1.5) cubic-bezier(0.19, 1, 0.22, 1);
  border: 1px solid #000;
  &:hover {
    background-color: #ffffff47;
  }
`
const HomeIconStyle = `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%)translateY(-42%);
  z-index: -1;
`
export default styled(Component)`
  position: relative;
  overflow: hidden;
  max-height: 100rem;
  padding: 6rem 2rem 0rem;
  color: #fff;
  width: 100%;
  h1::first-letter {
    text-transform: capitalize;
  }
  .header_menus {
    max-height: 100rem;
    transition: all 1s;
  }
  .wrap {
    display: flex;
    flex-direction: column;
    margin-bottom: 5rem;
  }
  .header_main {
    flex: 1;
    width: 100%;
    text-align: center;
    & > h1 {
      font-weight: 100;
      font-size: 4rem;
    }
  }
  .header_subtitle {
    text-align: center;
    font-family: "Gt america mono", sans-serif;
    font-size: 0.8rem;
    letter-spacing: 0.02em;
  }
`
