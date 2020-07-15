import * as React from 'react';
import { Link } from 'gatsby'

type Props = {

}
const Component: React.FC<Props> = (props) => (
  <div>
    <h1>Hello site</h1>
    <pre>{JSON.stringify(props)}</pre>
    <Link to='/'>Home</Link>
  </div>
)
export default Component