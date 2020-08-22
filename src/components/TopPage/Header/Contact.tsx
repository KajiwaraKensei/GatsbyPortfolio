// ______________________________________________________
// コンタクト
import React from "react"
import styled from "styled-components"
import { Phone, Mail, Twitter, GitHub } from "@material-ui/icons"
import { githubLink, telLink, mailLink, twitterLink } from "~/lib/index"
import { customFadeIn } from "~/lib/style"
import { profile } from "~/data/profile"

// ______________________________________________________
// 型
type Props = {
  className?: string
  profile: profile
}

type styledProps = {
  display?: boolean
}

// ______________________________________________________
// コンポーネント
const Component: React.FC<Props> = props => {
  const { className, profile } = props
  return (
    <div className={className}>
      <a
        href={githubLink(profile.github)}
        rel="noopener noreferrer"
        target="_blank"
        aria-label="github"
      >
        <GitHub />
      </a>
      <a
        href={twitterLink(profile.twitter)}
        rel="noopener noreferrer"
        target="_blank"
        aria-label="twitter"
      >
        <Twitter />
      </a>

      <a href={telLink(profile.tel)} rel="noopener noreferrer" target="_blank">
        <Phone />
      </a>
      <a
        href={mailLink(profile.mail)}
        rel="noopener noreferrer"
        target="_blank"
        aria-label="mail"
      >
        <Mail />
      </a>
    </div>
  )
}



// ______________________________________________________
// スタイル
const fadeIn = customFadeIn({
  start: `height:0;padding:0;`,
  end: `height:5rem;padding:2rem 0 0;`,
})
const fadeOut = customFadeIn({
  start: `height:5rem;padding:2rem 0 0;opacity:1;`,
  end: `height:0rem;padding:0;opacity:0;`,
})

export default styled(Component) <styledProps>`
  display: flex;
  transition: calc(700ms * 1.5) cubic-bezier(0.19, 1, 0.22, 1);
  padding-top: 2rem;
  justify-content: center;
  align-items: center;
  color: #fff;
  overflow: hidden;
  & > * {
    margin: 0 1rem 0;
    cursor: pointer;
    padding-bottom: 0.3rem;
    border-bottom: 2px solid #000;
    transition: 0.5s;
    &:hover {
      transition: 0.5s;
      border-bottom: 2px solid #f86;
    }
  }
  animation: ${({ display }) => display ? fadeIn : fadeOut} 0.7s forwards;
`
