import React from "react";
import styled from "styled-components";
import { WorksList } from "."
import works from "~/data/works"
type Props = {
  className?: string;
}

const Component: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <h1 className="title">WORKS</h1>
      <div className="works_list">
        <WorksList works={works} />
      </div>
    </div>
  )
}

export default styled(Component)`
  padding: 5rem 0;
  & > .title{
    text-align: center;
  }
  & > .works_list{
    display: flex;
    justify-content: center;
  }

`;