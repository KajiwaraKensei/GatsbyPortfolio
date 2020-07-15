import React from "react";
import styled from "styled-components";
import works, { workType } from "~/data/works";

type Props = {
  className?: string;
  work: workType;
}

const Component: React.FC<Props> = (props) => {
  const { className, work } = props;
  return (
    <div className={className}>
      <h1>{work.name}</h1>
      <div className="work_day">{work.workDay}</div>
      <div className="work_platform">platform / {work.platform}</div>
    </div>
  )
}

export default styled(Component)`
  margin-top: 50vh;
  min-height: 100vh;
  background-color: #fff;
  
  & > h1{
    margin: 0;
    margin-bottom: 2rem;
    padding-top: 3rem;
    text-align:center;
    font-size: 2rem;
    font-weight: 100;

  }

  & > .work_day, .work_platform{
    text-align: center;
    color: #96bdb9;
    font-size: .65rem;
    margin-bottom: .5rem;
    letter-spacing: 0.2em;
  }
`;