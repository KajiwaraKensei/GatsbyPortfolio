import React from "react"
import styled from "styled-components"
import profile from "~/data/profile"
import { Left, Right } from "."
import { Element } from "react-scroll"
import { Fade } from "react-awesome-reveal"

type Props = {
  className?: string
}

const Component: React.FC<Props> = props => {
  const { className } = props

  return (
    <Element name="profile">
      <div className={className}>
        <h1>PROFILE</h1>
        <div className="profile_content">
          <Left profile={profile} />
          <Right profile={profile} />
        </div>
      </div>
    </Element>
  )
}

export default styled(Component)`
  padding: 3rem 0rem 5rem;

  & > h1 {
    text-align: center;
    &:after {
      content: " ";
      border-bottom: solid 1px #9f9ae7;
      display: block;
      width: 5rem;
      margin: 10px auto;
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
    border-left: 2px dotted #aaa;
    padding-left: 0.5rem;

    & > .event {
      padding-left: 0.5rem;
    }
  }
`
