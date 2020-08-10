import React from "react"
import styled from "styled-components"
import { ImageContent } from "~/data/works"
import Image from "~/Parts/Image"

type Props = {
  className?: string
  content: ImageContent
}

const MapImages = (props: ImageContent) =>
  props.image.map((image, index) => (
    <Image
      alt={props.alt || "画像_" + index}
      key={"map_image_content_" + image}
      width={props.width || "100%"}
      height={props.height || "auto"}
      style={{ borderRadius: ".3rem", boxShadow: "#7373735c 0px 5px 11px 2px" }}
      filename={image}
    />
  ))
const Component: React.FC<Props> = props => {
  const { className, content } = props
  const { headline } = content
  return (
    <div className={className}>
      {headline && <h2>{headline}</h2>}
      <div className="map_image_content">{MapImages(content)}</div>
    </div>
  )
}

export default styled(Component) <{ content: ImageContent }>`
  width: 100%;
  max-width: 50rem;
  padding: 0 2rem 2rem;
  .map_image_content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  ${({ content }) => content.styled}
`
