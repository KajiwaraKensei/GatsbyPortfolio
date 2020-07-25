// ______________________________________________________
// Profile ページ
import React from "react"
import styled from "styled-components"
import profile from "~/data/profile"
import { Left, Right } from "."
import { Element } from "react-scroll"
import Coffee from "~/Parts/Coffee"
import Image from "~/Parts/Image"

type Props = {
  className?: string
}
// ______________________________________________________
//
const Component: React.FC<Props> = props => {
  const { className } = props

  return (
    <Element name="profile">
      <div className={className}>
        <div className="profile_background">
          <Image
            style={{ position: "absolute", zIndex: "-1" }}
            filename="joshua-ness-9iqqFZ7OuwY-unsplash.jpg"
            width="100vw"
            height="100%"
          />
        </div>
        <div className="wrap">
          <h1>PROFILE</h1>
          <div className="profile_content">
            <Left profile={profile} />
            <Right profile={profile} />
          </div>
        </div>
      </div>
      <img src="nikoru.svg" alt="" />
    </Element>
  )
}

// ______________________________________________________
//
export default styled(Component)`
  padding: 3rem 0rem 5rem;
  position: relative;
  color: #000;
  text-shadow: 1px 2px 5px #f6f6f6;
  & > .wrap {
    width: 100%;
    max-width: 60rem;
    background: #f6f6f666;
    border-radius: 0.5rem;
    padding: 1.5rem;
    margin: 0 auto;
    & > h1 {
      text-align: center;
      &:after {
        content: "";
        border-bottom: solid 1px #9f9ae7;
        display: block;
        width: 5rem;
        margin: 10px auto;
      }
    }
  }

  .profile_content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  & h4 {
    margin: 0.5rem 0rem 0.25rem;
  }

  & h2 {
    margin: 2rem 0 0.75rem;
  }
  .content {
    border-left: 2px dotted #0c0c0c;
    padding-left: 0.5rem;

    & > .event {
      padding-left: 0.5rem;
    }
  }

  .profile_background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`
