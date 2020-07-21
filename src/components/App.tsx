import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Top from "./TopPage"
import "./index.css"
import Loading from "~/Parts/Loading"
import { useSelector, useDispatch } from "react-redux"
import { RootState, actionCreator } from "~/store"
import EventListener from "react-event-listener"
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
    setTimeout(() => {
      setLoad()
    }, 2500)
  }, [])
  return (
    <div className={className}>
      <EventListener target="window" onResize={handleResize} />
      {state.load && <Loading />}
      <Top />
    </div>
  )
}

export default styled(App)``
