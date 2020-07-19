import React from "react"
import styled from "styled-components"
import { Menus } from "."
import profile from "~/data/profile"

type Props = {
  className?: string
}

const Component: React.FC<Props> = props => {
  const { className } = props
  return (
    <div className={className}>
      <div className="header_main">
        <h1>Kaji's Portfolio</h1>
      </div>
      <div className="header_subtitle">
        <div>Integrates with Sketch and Adobe XD* on macOS</div>
      </div>
      <div className="header_menus">
        <Menus profile={profile} />
      </div>
    </div>
  )
}

export default styled(Component)`
  max-height: 100rem;
  .header_menus {
    max-height: 100rem;
    transition: all 1s;
  }

  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  padding: 6rem 2rem 3rem;
  background-color: #000;
  color: #fff;
  .header_main {
    flex: 1;
    width: 100%;
    text-align: center;
    & > h1 {
      font-weight: 900;
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
