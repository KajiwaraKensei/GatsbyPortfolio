import * as React from "react"
import Work from "~/components/Work"
type Props = {
  "*"?: string
}
const Component: React.FC<Props> = props => (
  <div>
    <Work name={props["*"] || ""} />
  </div>
)
export default Component
