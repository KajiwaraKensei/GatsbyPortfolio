import * as React from "react"
import { Link } from "gatsby"
import SEO from "~/components/SEO"

type Props = {}
const Component: React.FC<Props> = props => (
  <div>
    <SEO />
    <h1>Hello site</h1>
    <pre>{JSON.stringify(props)}</pre>
    <Link to="/">Home</Link>
  </div>
)
export default Component
