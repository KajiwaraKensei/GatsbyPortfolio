import * as React from "react"
import Work from "~/components/Work"
import A from "~/components/Work/NotFount"
import "~/components/indx.css"
type Props = {
  "*"?: string
}
const Component: React.FC<Props> = props => (
  <div>
    <A name={props["*"] || ""} />
  </div>
)
export default Component
