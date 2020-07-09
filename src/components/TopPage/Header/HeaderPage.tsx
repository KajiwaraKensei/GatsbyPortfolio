import React from "react";
import styled from "styled-components";
import { Menus } from ".";
type Props = {
  className?: string;
};

const Component: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <div className="header_main">
        <h1>Kaji's Portfolio</h1>
      </div>
      <div className="header_subtitle">
        <div>Integrates with Sketch and Adobe XD* on macOS</div>
      </div>
      <div className="header_menus">
        <Menus />
      </div>
    </div>
  );
};

export default styled(Component)`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  padding: 6rem 2rem;
  background-color: #000;
  color: #fff;
  .header_main {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-family: 'Vesterbro poster', sans-serif;
    font-weight: 400;
    & > h1{
      font-size: 4.75rem;
    }
  }
  .header_subtitle{
    text-align: center;
    font-family: 'Gt america mono', sans-serif;
    font-size: 0.8rem;
    letter-spacing: 0.02em;
  }
`;
