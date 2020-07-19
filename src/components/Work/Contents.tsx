import React from "react"
import styled, { keyframes } from "styled-components"
import works, { workType } from "~/data/works"
import { ArticleType, LanguageCard, ImageType } from "."
type Props = {
  className?: string
  work: workType
}

const Component: React.FC<Props> = props => {
  const { className, work } = props

  const mapContent = work.contents.map((content, index) => {
    switch (content.type) {
      case "article":
        return (
          <ArticleType
            key={"content_" + (content.headline || index)}
            content={content}
          />
        )
      case "image":
        return (
          <ImageType
            key={"content_" + (content.headline || index)}
            content={content}
          />
        )
      default:
        return null
    }
  })

  const mapDevLang = work.languages.map(lang => (
    <LanguageCard key={"map_dev_" + lang.name} language={lang} />
  ))

  return (
    <div className={className}>
      <h1>{work.name}</h1>
      <div className="work_day">{work.workDay}</div>
      <div className="work_platform">platform / {work.platform}</div>

      <div className="work_langs">
        <h2 className="content_headline">Development Language</h2>
        <div className="work_langs_map">{mapDevLang}</div>
      </div>
      <div className="map_content">{mapContent}</div>
    </div>
  )
}

const up = keyframes`
0% {
  margin-top: 100vh;
}
100% {
  margin-top: 50vh;
}
`

export default styled(Component)`
  animation: ${up} 1s forwards;
  margin-top: 50vh;
  min-height: 100vh;
  background-color: #fff;

  & > h1 {
    margin: 0;
    margin-bottom: 2rem;
    padding-top: 3rem;
    text-align: center;
    font-size: 2rem;
    font-weight: 100;
  }

  .content_headline {
    color: #96bdb9;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 150;
  }

  .work_langs {
    padding-top: 5rem;
    & .work_langs_map {
      display: flex;
      flex-wrap: wrap;
      justify-content: left;
      padding: 0 2rem;
    }
  }

  & > .work_day,
  .work_platform {
    text-align: center;
    color: #96bdb9;
    font-size: 0.65rem;
    margin-bottom: 0.5rem;
    letter-spacing: 0.2em;
  }

  & .map_content {
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
