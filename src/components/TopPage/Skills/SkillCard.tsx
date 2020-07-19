import React from "react";
import styled from "styled-components";

import CircleSVG, { Props as SVGProps } from "components/Parts/CircleSVG"
import { Fade } from 'react-awesome-reveal';

export type Skill = {
  name: string;
  proficiencyLevel: number;
  description: string;
  works: {
    url: string;
    name: string;
  }[];
}
type Props = {
  className?: string;
  skill: Skill;
  index: number;
}


// SVGの引数の生成
const SetSVG = (skill: Skill): SVGProps => {

  const { proficiencyLevel } = skill;

  let color = (Math.floor(256 * (proficiencyLevel * 0.01))) + 10;
  color > 210 && (color = 210);

  let r = color;
  let g = color * 0.9;
  let b = (color + 50) * 1.2;

  const baseColor = `rgba(${r}, ${g}, ${b}, .5)`
  const strokeWidth =
    proficiencyLevel > 25 ?
      proficiencyLevel > 50 ?
        proficiencyLevel > 75 ?
          3 :
          3 :
        3.5 :
      3;

  const circumference =
    proficiencyLevel > 25 ?
      proficiencyLevel > 50 ?
        proficiencyLevel > 75 ?
          400 :
          400 :
        400 :
      400;

  return {
    percent: proficiencyLevel,
    baseColor,
    strokeWidth,
    circumference,
    marginalColor: "#ffffff00"
  }
}

const Component: React.FC<Props> = (props) => {
  const { className, skill, index } = props;
  return (
    <Fade className={className} direction="top" delay={200 * index} triggerOnce >
      <div className="card">

        <div className="circle">
          <div>
            <CircleSVG {...SetSVG(skill)} />
            <div className="percent">{skill.proficiencyLevel}%</div>
          </div>
        </div>

        <div className="content">
          <h2 className="title">{skill.name}</h2>
          <p className="copy">
            {skill.description}
          </p>
        </div>
      </div>
    </Fade>
  )
}

export default styled(Component)`
  display: flex;
  margin: 2rem 1rem;
  color: #eee;
  font-weight: 200;
  & .card >  .circle {
    & > div{
      position: relative;
      & > .percent{
        font-size: .9rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
        
      }
    }
  }

  .card{
    background-color: #ffffff1a;
    border-radius: .25rem;
    flex-grow: 1;
    border-radius: .5rem;
    position: relative;
    padding: .75rem 1rem;
    width: 15rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    &:hover{
      & .btn{
        opacity: 1;
      }
    }
  }


  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: .5rem;
    transition: transform 700ms cubic-bezier(0.19, 1, 0.22, 1);
    z-index: 2;
    height: 100%;
  }

  .title {
    font-size: 1.3rem;
    margin-bottom: .5rem;
    &:after{
    content: " ";
    border: solid 1px #9f9ae7;
    display: block;
    width: 55px;
    margin: 10px auto;
}
  }

  .copy {
    margin: 0;
    transition: transform calc(700ms * 1.5) cubic-bezier(0.19, 1, 0.22, 1);
    font-size: .9rem;
    line-height: 1.35;
  }

  .btn {
    transition: opacity 700ms cubic-bezier(0.19, 1, 0.22, 1);
    opacity: 0;
    cursor: pointer;
    margin-top: auto;
    padding: 0.5rem 1rem;
    font-size: 0.65rem;
    font-weight: bold;
    letter-spacing: 0.025rem;
    text-transform: uppercase;
    color: #000;
    background-color: #fff;
    border: none;
  }


`;