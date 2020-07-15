import React from "react";
import styled from "styled-components";

type Props = {
  className?: string;
  name: string;
}

const Component: React.FC<Props> = (props) => {
  const { className, name } = props;



  return (
    <div className={className}>
      「 {name} 」は見つかりませんでした^^
    </div>
  )
}

export default styled(Component)``;