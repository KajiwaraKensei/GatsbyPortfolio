import { animateScroll as scroll } from "react-scroll"

export const scrollOption = {
  duration: 500,
  delay: 0,
  smooth: true,
}

export const scrollToTop = () => {
  scroll.scrollToTop({
    duration: 500,
  })
}
