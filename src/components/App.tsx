import React, { useState, useEffect } from "react"
import Top from "./TopPage"
import "./index.css"
import Loading from "~/Parts/Loading"
import { useSelector, useDispatch } from "react-redux"
import { RootState, actionCreator } from "~/store"
import EventListener from "react-event-listener"

// ______________________________________________________
//
type Props = {
  className?: string
}

const useRedux = () => {
  const state = useSelector((state: RootState) => ({
    load: state.window.load,
    type: state.window.type,
  }))
  const dispatch = useDispatch()
  const setLoad = () => {
    dispatch(actionCreator.window.setLoad())
  }
  return { state, setLoad, dispatch }
}

// ______________________________________________________
//
const App: React.FC<Props> = props => {
  const { className } = props
  const [loading, setLoading] = useState(true)

  const { state, setLoad, dispatch } = useRedux()

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
    setLoad()
    setTimeout(() => {
      setLoading(false)
    }, 1500)
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
