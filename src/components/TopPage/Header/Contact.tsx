import React from "react";
import styled from "styled-components";
import GithubIcon from "@material-ui/icons/GitHub"
import YouTubeIcon from "@material-ui/icons/YouTube"
import TwitterIcon from "@material-ui/icons/Twitter"
import MailIcon from "@material-ui/icons/Mail"
import PhoneIcon from "@material-ui/icons/Phone"
import { customFadeIn } from "~/lib/style"
type Props = {
  className?: string;
}

const Component: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <GithubIcon fontSize="large" />
      <YouTubeIcon fontSize="large" />
      <TwitterIcon fontSize="large" />
      <PhoneIcon fontSize="large" />
      <MailIcon fontSize="large" />
    </div>
  )
}


type styledProps = {
  display?: boolean;
}
const fadeIn = customFadeIn({ start: `height:0;padding:0;`, end: `height:5rem;padding:2rem 0 0;` });

export default styled(Component) <styledProps>`
display: ${({ display }) => display ? `flex` : `none`};
transition: calc(700ms * 1.5) cubic-bezier(0.19, 1, 0.22, 1);
padding-top: 2rem;
justify-content: center;
align-items: center;
color: #fff;
 & > *{
   margin: 2rem 1rem 0;
   cursor: pointer;
   padding-bottom: .3rem;
   border-bottom: 2px solid #000;
   transition: .5s;
   &:hover{
    transition: .5s;
     border-bottom: 2px solid #f86;
   }
 }
 animation: ${fadeIn} .7s forwards;
`;