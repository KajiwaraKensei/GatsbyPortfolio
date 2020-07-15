import React from 'react'
import { StaticQuery, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

// 画像ファイルパスをプロパティに取るようなコンポーネントを定義
export default ({ filename, height, width, style }: { filename: string, height?: number | string, width?: number | string, style?: object }) => (

  // ページじゃないコンポーネントでもGraphQLが使えるように
  // StaticQueryタグを使う
  <StaticQuery

    // GraphQLのクエリ引数には何も指定しない！
    query={graphql`
    {
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

    // 全画像情報がdataに代入されている
    render={(data) => {

      // 指定した画像ファイルパス（コンポーネントのプロパティ）と
      // 一致するgatsby-image用の情報を取得
      const image = data.allFile.edges.find((n: any) => {
        return n.node.relativePath.includes(filename)
      })

      if (!image) {
        return null
      }

      // Imgタグでgatsby-imageで最適化された画像を表示する
      const imageSizes = image.node.childImageSharp.fluid
      return <Img style={{ ...style, height: height || "20rem", width: width || "20rem" }} fluid={imageSizes} />
    }}
  />
)