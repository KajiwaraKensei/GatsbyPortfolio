import React from "react";
import styled, { keyframes } from "styled-components";

type Props = {
  className?: string;
  images: string[];
}

const Component: React.FC<Props> = (props) => {
  const { className, images } = props;
  const mapImages = images.map(image => <Li url={image} key={"loop_" + image}></Li>)
  return (
    <div className={className}>
      <ul className="ho1">
        {mapImages}

      </ul>
      <ul className="ho2">
        {mapImages}
      </ul>

    </div>
  )
}

const loop = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;
const loop2 = keyframes`
0% {
  transform: translateX(0%);
}
100% {
  transform: translateX(-200%);
}
`
const fadeIn = keyframes`
  0% {opacity: 0} /*アニメーション開始時は不透明度0%*/
  100% {opacity: 1} /*アニメーション終了時は不透明度100%*/
`
export default styled(Component)`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  opacity: 0;
  animation: ${fadeIn} .5s forwards;
  width: 100vw;
  height: 100vh;
  display:flex;
  overflow: hidden;
  & > ul{
      display: flex;
      flex-flow: row nowrap;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
  }

& > .ho1{
    animation: ${loop} 40s -20s linear infinite;
    backface-visibility: hidden;
    will-change: transform;
  }
  & > .ho2 {
    animation: ${loop2} 40s 0s linear infinite;
  }
`;

type LiProps = {
  url: string;
}
const Li = styled.li<LiProps>`
    display: inline-block;
    width: calc(100vw / 2);
    min-width: 20rem;
    margin: 0;
    list-style: none;
    text-align: center;
    background: url(${p => p.url}) center center;
    background-size: cover;
    position: relative;
    z-index: -1;
    &:before{
      content: '';
      background: inherit;
      filter: blur(2px) grayscale(50%);
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      z-index: -3;
    }
`;

