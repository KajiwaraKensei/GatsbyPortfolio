import * as React from 'react';
import { Link } from 'gatsby'
import Work from "~/components/Work"
type Props = {
  "*"?: string;
}
const Component: React.FC<Props> = (props) => (
  <div>
    <Work name={props["*"] || ""} />
  </div>
)
export default Component