import React from 'react';
import styled from "styled-components";
import Top from "./TopPage"
import './index.css';

type Props = {
  className?: string;
};


const App: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <Top />
    </div>
  );
}

export default styled(App)``;
