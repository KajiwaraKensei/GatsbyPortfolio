import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'


type Props = {
  className?: string;
  url: string;
  height?: string | number;
  width?: string | number;
  style?: object;
}
const BackgroundSection: React.FC<Props> = (props) => {
  const { children, className, url, style, width, height } = props;

  return (
    <StaticQuery
      query={graphql`
      query {
        allFile(filter: {}) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 1600) {
                  base64
                  src
                  srcSet
                  srcSetWebp
                  srcWebp
                  aspectRatio
                  sizes
                }
              }
            }
          }
        }
      }
    `}
      render={data => {
        // Set ImageData.
        const image = data.allFile.edges.find((n: any) => {
          return n.node.relativePath.includes(url)
        })

        if (!image) {
          console.log("Image Not Fount !!");
          return children
        }

        const imageSizes = image.node.childImageSharp.fluid
        return <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageSizes}
          style={{ ...style, height: height || "20rem", width: width || "20rem" }}
        >
          {children}
        </BackgroundImage>

      }}
    />
  )
}

const StyledBackgroundSection = styled(BackgroundSection)`
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  transition: background-image calc(700ms * 1.5) cubic-bezier(0.19, 1, 0.22, 1);
  z-index: -2;
`

export default StyledBackgroundSection