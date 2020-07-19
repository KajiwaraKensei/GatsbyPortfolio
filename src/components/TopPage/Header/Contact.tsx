import React from "react"
import styled from "styled-components"
import GithubIcon from "@material-ui/icons/GitHub"
import TwitterIcon from "@material-ui/icons/Twitter"
import MailIcon from "@material-ui/icons/Mail"
import PhoneIcon from "@material-ui/icons/Phone"
import { customFadeIn } from "~/lib/style"
import { githubLink, telLink, mailLink, twitterLink } from "~/lib/index"
import { profile } from "~/data/profile"
type Props = {
  className?: string
  profile: profile
}

const Component: React.FC<Props> = props => {
  const { className, profile } = props
  return (
    <div className={className}>
      <a
        href={githubLink(profile.github)}
        rel="noopener noreferrer"
        target="_blank"
      >
        <GithubIcon />
      </a>
      <a
        href={twitterLink(profile.twitter)}
        rel="noopener noreferrer"
        target="_blank"
      >
        <TwitterIcon />
      </a>

      <a href={telLink(profile.tel)} rel="noopener noreferrer" target="_blank">
        <PhoneIcon />
      </a>
      <a
        href={mailLink(profile.mail)}
        rel="noopener noreferrer"
        target="_blank"
      >
        <MailIcon />
      </a>
    </div>
  )
}

type styledProps = {
  display?: boolean
}
const fadeIn = customFadeIn({
  start: `height:0;padding:0;`,
  end: `height:5rem;padding:2rem 0 0;`,
})

export default styled(Component)<styledProps>`
  display: ${({ display }) => (display ? `flex` : `none`)};
  transition: calc(700ms * 1.5) cubic-bezier(0.19, 1, 0.22, 1);
  padding-top: 2rem;
  justify-content: center;
  align-items: center;
  color: #fff;
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
  animation: ${fadeIn} 0.7s forwards;
`
