// ______________________________________________________
// 学歴
import React, { Fragment } from "react"
import styled from "styled-components"
import { Career } from "~/data/profile"
import LocationCityIcon from "@material-ui/icons/LocationCity"
import { Fade } from "react-awesome-reveal"

// ______________________________________________________
// 型
type Props = {
  className?: string
  introductions: Career[]
}

// ______________________________________________________
// コンポーネント
const Component: React.FC<Props> = props => {
  const { className, introductions } = props

  const mapIntroductions = introductions.map(introduction => (
    <Fragment key={"map_introduction_" + introduction.year}>
      <h3 className="year">{introduction.year}</h3>
      <div className="event">{introduction.event}</div>
    </Fragment>
  ))

  return (
    <div className={className}>
      <h2 className="title width_material_icon">
        Academic background <LocationCityIcon />
      </h2>

      <div className="content">{mapIntroductions}</div>
    </div>
  )
}

// ______________________________________________________
// スタイル
export default styled(Component)``
