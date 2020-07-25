import { keyframes } from "styled-components"

// copy light のスタイル
export const copy = `
  margin: 0;
  font-size: .9rem;
  font-style: italic;
  line-height: 1.35;
  font-weight: 200;
`

export const fadeIn = keyframes`
  0% {
    opacity: 0;
    padding: 0 1rem;
  } 
  100% {
    opacity: 1;
    padding: 0;
  }
`
export const blinking = keyframes`
  0%, 100% {
    opacity: 0;
  } 
  50% {
    opacity: 1;
  }`
export const customFadeIn = (props?: { start?: string; end?: string }) => {
  return keyframes`
  0% {
    opacity: 0;
    padding: 0 1rem;
    ${props && props.start}
  } 
  100% {
    opacity: 1;
    padding: 0;
    ${props && props.end}
  }
`
}
