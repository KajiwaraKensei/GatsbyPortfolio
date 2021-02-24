import * as React from "react"
import Work from "~/components/Work"
import A from "~/components/Work/NotFount"
import "~/components/index.css"
import EventListener from "react-event-listener"
import { useWindowSize } from "~/lib/redux"
import SEO from "~/components/SEO"

type Props = {
  "*"?: string
}
const Component: React.FC<Props> = props => {
  const { setWindow, dispatch } = useWindowSize()

  const initFetch = React.useCallback(() => {
    setWindow(window.innerWidth)
  }, [dispatch])
  React.useEffect(() => {
    initFetch()
  }, [initFetch])
  const handleResize = () => {
    setWindow(window.innerWidth)
  }
  return (
    <div>
      <EventListener target="window" onResize={handleResize} />
      <SEO twitter={{}} title={"404!!"} description={"page not found!"} />

      <A name={props["*"] || "404"} />
    </div>
  )
}
export default Component
