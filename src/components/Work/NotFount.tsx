import React, { useState, useRef } from "react"
import styled, { keyframes } from "styled-components"
import works from "~/data/works"
import { navigate } from "@reach/router"
import { Page } from "."
import NotFoundIcon from "~/components/Icons/NotFoundIcon"
type Props = {
  className?: string
  name: string
}
const worksName = () => {
  let name = ""
  const w = works
  w.sort()
  works.forEach(work => {
    name += "'" + work.name + "'  "
  })
  return name
}

const Component: React.FC<Props> = props => {
  const { className, name } = props
  const [work, setWork] = useState(name)
  const [ok, setOk] = useState(false)
  const [articles, serArticles] = useState([
    `not found page:'${name}'`,
    `表示したい作品名を入力してください。`,
    `ls:一覧で作品を表示 | home:ホームに戻る`,
  ])
  const ref = useRef<HTMLInputElement>(null)
  const [count, setCount] = useState(0)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    !ok && setWork(event.target.value)
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    serArticles(articles => [...articles, work])

    if (work === "") return
    if (work === "home" || count > 10) {
      serArticles(articles => [...articles, `ホームに移動します...`])
      setTimeout(() => {
        navigate(`/`)
      }, 1000)
    } else if (work === "ls") {
      serArticles(articles => [...articles, worksName()])
    } else {
      const res = works.filter(({ name }) => name === work)
      if (res.length) {
        if (res[0].name === work) {
          serArticles(articles => [...articles, `OK！移動します...`])

          setTimeout(() => {
            setOk(true)
            navigate(`/work/${res[0].name}`)
          }, 1000)
          return
        }
      }
      setCount(count + 1)
      serArticles(articles => [
        ...articles,
        `no such work_name or command: ${work}`,
      ])
    }

    setWork("")
  }

  const mapArticles = articles.map(article => (
    <p key={article}>
      {"> "}
      {article}
    </p>
  ))
  return ok ? (
    <Page name={work} />
  ) : (
      <div className={className}>
        <NotFoundIcon style={IconStyle} />
        <form onSubmit={handleSubmit}>
          {mapArticles}
          <p>
            {"> "}
            <Cursor
              ref={ref}
              onBlur={() => {
                ref.current?.focus()
              }}
              value={work}
              onChange={handleChange}
              autoFocus
            />
          </p>
        </form>
      </div>
    )
}

const Cursor = styled.input`
  width: 100%;
  background: none;
  border: none;
  outline: none;
  color: #fff;
`

export default styled(Component)`
  background: #000;
  color: #fff;
  position: relative;
  p {
    display: flex;
  }
  * {
    font-size: 0.8rem;
    font-family: Consolas, Menlo, "Liberation Mono", Courier, monospace;
    font-weight: 200;
  }
`

const IconStyle = `
  position: absolute;
  top: 5rem;
  right: 5rem;
  opacity: .5rem;
`
