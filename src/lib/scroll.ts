import { animateScroll as scroll } from "react-scroll"
import { WindowType } from "~/store/window"

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
export const setSize = <T>(type: WindowType, pc: T, tablet: T, phone: T) => {
  switch (type) {
    case "pc":
      return pc
    case "phone":
      return phone
    case "tablet":
      return tablet
  }
}
