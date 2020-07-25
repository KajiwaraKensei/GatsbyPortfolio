// ______________________________________________________
// header menu
import React, { useState } from "react"
import styled from "styled-components"
import { scroller } from "react-scroll"
import { scrollOption } from "~/lib/scroll"
import { Contact } from "."
import { profile } from "~/data/profile"
type Props = {
  className?: string
  profile: profile // 使うプロフィール
}

const Component: React.FC<Props> = props => {
  const { className, profile } = props

  // クリックイベント
  const clickDetail = (to: string) => (event: React.MouseEvent) => {
    scroller.scrollTo(to, scrollOption)
  }

  const [contactToggle, setContactToggle] = useState(false) // コンタクトを表示するか

  // コンタクトクリック
  const clickContact = () => {
    setContactToggle(!contactToggle)
  }
  return (
    <div className={className}>
      <div className="menu_buttons">
        <Button
          onClick={clickDetail("profile")}
          color="#000"
          background="#fff"
          value="PROFILE"
          border="#fff"
        />
        <Button onClick={clickDetail("skills")} value="SKILLS" />
        <Button onClick={clickDetail("works")} value="WORKS" />
        <Button
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
}>`
  width: 6.5rem;
  height: 3rem;
  margin: 1rem;
  transition: 0.25s;
  cursor: pointer;
  border: 1px solid #fff;
  position: relative;
  color: #fff;
  background: ${({ backBackground }) => backBackground || "#000"};
  transition: transform 700ms cubic-bezier(0.19, 1, 0.22, 1);
  border-radius: .2rem;
  &::before {
    content: "${({ value }) => value}";
    border-radius: .2rem;
    position: absolute;
    pointer-events: none;
    color: ${({ color }) => color || "#fff"};
    background: ${({ background }) => background || "#000"};

    display:flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    top: -.6rem;
    left: .5rem;
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
