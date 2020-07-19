import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Top from "./TopPage"
import "./index.css"
import Loading from "~/Parts/Loading"
import { useSelector, useDispatch } from "react-redux"
import { RootState, actionCreator } from "~/store"

type Props = {
  className?: string
}

const useRedux = () => {
  const state = useSelector((state: RootState) => state.window.load)
  const dispatch = useDispatch()
  const setLoad = () => {
    dispatch(actionCreator.window.setLoad())
  }
  return { state, setLoad }
}

const App: React.FC<Props> = props => {
  const { className } = props
  const [loading, setLoading] = useState(true)

  const { state, setLoad } = useRedux()

  useEffect(() => {
    setTimeout(() => {
      setLoad()
    }, 2500)
  }, [])
  return (
    <div className={className}>
      {state && <Loading />}
      <Top />
    </div>
  )
}

export default styled(App)``
