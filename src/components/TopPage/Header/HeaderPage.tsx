// ______________________________________________________
// Header
import React from "react"
import styled from "styled-components"
import { Menus } from "."
import profile from "~/data/profile"
import HomeIcon from "~/icon/HomeIcon"

type Props = {
  className?: string
}

import { setSize } from "~/lib/scroll"
import { useSelector } from "react-redux"
import { RootState } from "~/store"
const useRedux = () => {
  const state = useSelector((state: RootState) => ({
    load: state.window.load,
    type: state.window.type,
  }))
  return { state }
}

// ______________________________________________________
//
const Component: React.FC<Props> = props => {
  const { className } = props
  const { state } = useRedux()
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
          <h1>{profile.name[0]}'s Portfolio1</h1>
        </div>
        <div className="header_subtitle">
          <div>Integrates with Sketch and Adobe XD* on macOS</div>
        </div>
        <div className="header_menus">
          <Menus profile={profile} />
        </div>
      </div>
    </header>
  )
}

// ______________________________________________________
// スタイル

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
  h1::first-letter {
    text-transform: capitalize;
  }
  .profile_background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    & img {
      object-position: 50% 20% !important;
      filter: brightness(90%);
    }
  }

  max-height: 100rem;
  .header_menus {
    max-height: 100rem;
    transition: all 1s;
  }
  .wrap {
    display: flex;
    flex-direction: column;
  }
  padding: 6rem 2rem 3rem;
  color: #fff;
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
