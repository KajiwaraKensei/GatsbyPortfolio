import React from "react";
import styled from "styled-components";
import BackGround from "~/Parts/Background"
type Props = {
  className?: string;

}

const Component: React.FC<Props> = (props) => {
  const { className } = props;
  return (

    <div className={className}>
      <BackGround width={"100%"} height={"100%"} url={"01f.jpg"} ></BackGround>
    </div>
  )
}

export default styled(Component)`
position: fixed;
z-index: -10;
top: 0;
left: 0;
width: 100%;
height: 50vh;
`;