import React, { useState, useEffect } from "react"
import Top from "./TopPage"
import "./index.css"
import Loading from "~/Parts/Loading"
import { actionCreator } from "~/store"
import EventListener from "react-event-listener"
import { useWindowSize } from "~/lib/redux"
import Send from "~/components/SendMessage"
// ______________________________________________________
//
type Props = {
  className?: string
}

// ______________________________________________________
//
const App: React.FC<Props> = props => {
  const { className } = props
  const { state, dispatch } = useWindowSize()
  const [loading, setLoading] = useState(state.load === true)

  const initFetch = React.useCallback(() => {
    dispatch(actionCreator.window.setWindowWidth(window.innerWidth))
  }, [dispatch])
  React.useEffect(() => {
    initFetch()
  }, [initFetch])
  const handleResize = () => {
    dispatch(actionCreator.window.setWindowWidth(window.innerWidth))
  }

  useEffect(() => {
    dispatch(actionCreator.window.setAbleHome())
    dispatch(actionCreator.window.setLoad())
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  return (
    <div className={className}>
      <EventListener target="window" onResize={handleResize} />
      {loading && <Loading load={state.load} />}
      <Top />
    </div>
  )
}

export default App
