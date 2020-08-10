import React from "react"
import styled from "styled-components"
import { Article } from "~/data/works"
import Image from "~/Parts/Image"
type Props = {
  className?: string
  content: Article
}

const Component: React.FC<Props> = props => {
  const { className, content } = props
  const { headline, value, imagePosition, image, width, alt } = content
  const _imgPosition = imagePosition || "top"

  const displayImage = image && (
    <Image
      style={{
        borderRadius: ".3rem",
        boxShadow: "#7373735c 0px 5px 11px 2px",
        margin: "3%",
        maxWidth: width,
      }}
      filename={image}
      width={"96%"}
      height={"auto"}
      alt={alt || ""}
    />
  )
  return (
    <div className={className}>
      {_imgPosition === "top" && displayImage}
      {headline && <h2 className="content_headline">{headline}</h2>}
      {_imgPosition === "underHeadline" && displayImage}
      <p className="content_value">{value}</p>
      {_imgPosition === "bottom" && displayImage}
    </div>
  )
}

export default styled(Component)<{ content: Article }>`
  width: 100%;
  max-width: 50rem;
  padding: 0 2rem 2rem;
  .content_value {
    line-height: 1.75rem;
    font-weight: 200;
    text-align: justify;
    letter-spacing: 0.07em;
    font-family: "museo-sans", sans-serif;
  }
  ${({ content }) => content.styled}
`
