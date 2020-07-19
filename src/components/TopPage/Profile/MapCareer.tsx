import React, { Fragment } from "react";
import styled from "styled-components";
import { Career } from "~/data/profile"
import BusinessIcon from '@material-ui/icons/Business';
import { Fade } from 'react-awesome-reveal';

type Props = {
  className?: string;
  careers: Career[]
}

const Component: React.FC<Props> = (props) => {
  const { className, careers } = props;


  const mapCareers = careers.map(career =>
    <Fragment key={"map_career_" + career.year}>
      <h4 className="year">{career.year}</h4>
      <div className="event">{career.event}</div>
    </Fragment>
  )
  return (
    <div className={className}>
      <Fade direction="top" delay={800} triggerOnce >
        <h2 className="title width_material_icon">Career <BusinessIcon /></h2>
      </Fade>

      <Fade direction="top" delay={1000} triggerOnce >
        <div className="content">
          {mapCareers}
        </div>
      </Fade>

    </div>
  )
}

export default styled(Component)`
`;