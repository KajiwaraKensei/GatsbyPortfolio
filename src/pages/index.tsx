import React from "react"
import A, { myContext } from "../wrap-with-provider"
import App from "~/components/App"
export default function Home() {
  const theme = React.useContext(myContext)
  return (

    <App />


  )
}
