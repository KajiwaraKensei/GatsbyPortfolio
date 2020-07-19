import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Top from "./TopPage"
import "./index.css"
import Loading from "~/Parts/Loading"
type Props = {
  className?: string
}

const App: React.FC<Props> = props => {
  const { className } = props
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <div className={className}>

      <Top />
      {loading && <Loading />}
    </div>
  )
}

export default styled(App)``
