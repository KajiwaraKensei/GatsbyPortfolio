// ______________________________________________________
// 使用言語説明
import React from "react"
import styled from "styled-components"

// ______________________________________________________
// 型
type Props = {
  className?: string
  language: { name: string; reason: string[] }
}

// ______________________________________________________
// コンポーネント
const Component: React.FC<Props> = props => {
  const { className, language } = props
  const mapReasons = language.reason.map(reason => (
    <li key={"reason_" + reason}>{reason}</li>
  ))
  return (
    <div className={className}>
      <p>{language.name}</p>
      <ul>{mapReasons}</ul>
    </div>
  )
}

// ______________________________________________________
// スタイル
export default styled(Component)`
  flex-basis: 20rem;
  flex-grow: 1;
  padding: 1rem;
  & > p {
    font-size: 1rem;
    font-weight: 250;
    margin: 0.25rem 0;
  }
  ul {
    margin: 0.5rem 0;
    padding-left: 1rem;
  }
  ul > li {
    margin-top: 0.25rem;
    position: relative;
    list-style: none;
    line-height: 1.4;
    font-size: 0.9rem;
  }
  ul > li::after {
    display: block;
    content: "";
    position: absolute;
    top: 0.65em;
    left: -1em;
    width: 8px;
    height: 1px;
    background-color: #666;
  }
`
