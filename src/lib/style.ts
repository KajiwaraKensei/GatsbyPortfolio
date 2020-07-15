import {keyframes} from "styled-components"
export const copy = `
  margin: 0;
  font-family: 'Cardo', serif;
  font-size: .9rem;
  font-style: italic;
  line-height: 1.35;
`

export const fadeIn = keyframes`
  0% {
    opacity: 0;
    padding: 0 1rem;
  } /*アニメーション開始時は不透明度0%*/
  100% {
    opacity: 1;
    padding: 0;
  } /*アニメーション終了時は不透明度100%*/
`