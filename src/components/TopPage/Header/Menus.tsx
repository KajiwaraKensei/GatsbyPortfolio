// ______________________________________________________
// header menu
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { scroller } from "react-scroll"
import { scrollOption } from "~/lib/scroll"
import { Contact } from "."
import { profile } from "~/data/profile"
import { useWindowSize } from "~/lib/redux"

// ______________________________________________________
// 型
type Props = {
  className?: string
  profile: profile // 使うプロフィール
}

// ______________________________________________________
// コンポーネント
const Component: React.FC<Props> = props => {
  const { className, profile } = props
  const { state } = useWindowSize()

  // クリックイベント
  const clickDetail = (to: string) => (event: React.MouseEvent) => {
    scroller.scrollTo(to, scrollOption)
  }

  const [contactToggle, setContactToggle] = useState(false) // コンタクトを表示するか
  const [buttonSize, setButtonSize] = useState<"default" | "small">("default") // ボタンのサイズ

  // コンタクトクリック
  const clickContact = () => {
    setContactToggle(!contactToggle)
  }

  // state.type を監視
  useEffect(() => {
    setButtonSize(state.type === "phone" ? "small" : "default")
  }, [state.type])

  return (
    <div className={className}>
      <div className="menu_buttons">
        <Button
          size={buttonSize}
          onClick={clickDetail("profile")}
          color="#000"
          background="#fff"
          value="PROFILE"
          border="#fff"
        />
        <Button
          size={buttonSize}
          onClick={clickDetail("skills")}
          value="SKILLS"
        />
        <Button
          size={buttonSize}
          onClick={clickDetail("works")}
          value="WORKS"
        />
        <Button
          size={buttonSize}
          onClick={clickContact}
          value="CONTACT"
          backBackground="#9f9ae7"
        />
      </div>
      <Contact display={contactToggle} profile={profile} />
    </div>
  )
}

// ______________________________________________________
// スタイル

// ボタンスタイル
const Button = styled.div<{
  value: string
  color?: string
  background?: string
  backBackground?: string
  border?: string
  size?: "small" | "default"
}>`
  transition: 0.25s;
  cursor: pointer;
  border: 1px solid #fff;
  position: relative;
  color: #fff;
  background: ${({ backBackground }) => backBackground || "#000"};
  transition: transform 700ms cubic-bezier(0.19, 1, 0.22, 1);
  border-radius: .2rem;
  height: 3rem;
  &::before {
    content: "${({ value }) => value}";
    position: absolute;
    pointer-events: none;
    color: ${({ color }) => color || "#fff"};
    background: ${({ background }) => background || "#000"};
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border: 1px solid  ${({ border, color }) => border || color || "#fff"};
    transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1);
  }

  &:hover {
    transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1);
    &::before {
      top: -.3rem;
      left: .2rem;
      transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1);
    }
  }
  ${({ size }) => (size === "small" ? smallButton : defaultButton)}

`

const smallButton = `
margin: .7rem 1rem;
flex: 1 1 6.5rem;
&::before {
  border-radius: .2rem;
  top: -.6rem;
  left: .5rem;
}
@media screen and (max-width: 350px) {
  border-radius: 0;
  margin: 0rem 1rem;
  border: none;
  &::before {
    border-radius: 0;
    top: 0rem;
    left: 0rem;
  }
}
`
const defaultButton = `
width: 6.5rem;
margin: 1rem;
&::before {
  border-radius: .2rem;
  top: -.6rem;
  left: .5rem;
}
`
// 全体
export default styled(Component)`
  & > .menu_buttons {
    width: 100%;
    max-width: 40rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 2rem 0 0;
    margin: 0 auto;
  }
`
