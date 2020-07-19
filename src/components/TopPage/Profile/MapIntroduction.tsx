import React, { Fragment } from "react"
import styled from "styled-components"
import { Career } from "~/data/profile"
import LocationCityIcon from "@material-ui/icons/LocationCity"
import { Fade } from "react-awesome-reveal"

type Props = {
  className?: string
  introductions: Career[]
}

const Component: React.FC<Props> = props => {
  const { className, introductions } = props

  const mapIntroductions = introductions.map(introduction => (
    <Fragment key={"map_introduction_" + introduction.year}>
      <h4 className="year">{introduction.year}</h4>
      <div className="event">{introduction.event}</div>
    </Fragment>
  ))
  return (
    <div className={className}>
      <Fade direction="top" delay={400} triggerOnce>
        <h2 className="title width_material_icon">
          Academic background <LocationCityIcon />
        </h2>
      </Fade>
      <Fade direction="top" delay={600} triggerOnce>
        <div className="content">{mapIntroductions}</div>
      </Fade>
    </div>
  )
}

export default styled(Component)``
