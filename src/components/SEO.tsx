import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
type Props = {
  className?: string
  title: string
}

const Component: React.FC<Props> = props => {
  const { className, title } = props
  return (
    <div className={className}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
    </div>
  )
}

export default styled(Component)``
