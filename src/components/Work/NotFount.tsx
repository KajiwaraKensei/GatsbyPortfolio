// ______________________________________________________
// 404 
import React, { useState, useRef } from "react"
import styled from "styled-components"
import works from "~/data/works"
import { navigate } from "@reach/router"
import { Page, BackButton } from "."
import NotFoundIcon from "~/components/Icons/NotFoundIcon"
import { useWindowSize } from "~/lib/redux"
import { setSize } from "~/lib/scroll"

// ______________________________________________________
// 型
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

// ______________________________________________________
// コンポーネント
const Component: React.FC<Props> = props => {
  const { state } = useWindowSize()
  const { className, name } = props
  const [work, setWork] = useState(name)
  const [ok, setOk] = useState(false)
  const [articles, serArticles] = useState([
    `page not found:'${name}'`,
    `表示したい作品名を入力してください。`,
    `もしくは、ls:一覧で作品を表示 | home:ホームに戻る`,
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
      }, 500)
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
          }, 500)
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
        <BackButton size={`${setSize(state.type, 6, 5, 4)}rem`} />
        <NotFoundIcon
          style={IconStyle}
          size={setSize(state.type, 650, 500, 350)}
        />
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
// ______________________________________________________
// スタイル
const Cursor = styled.input`
  width: 100%;
  background: none;
  border: none;
  outline: none;
  color: #fff;
  font-size: 0.8rem;
  font-family: Consolas, Menlo, "Liberation Mono", Courier, monospace;
  font-weight: 200;
`

export default styled(Component)`
  color: #fff;
  position: relative;
  p {
    display: flex;
    font-size: 0.8rem;
    font-family: Consolas, Menlo, "Liberation Mono", Courier, monospace;
    font-weight: 200;
  }
`

const IconStyle = `
  position: absolute;
  top: 5rem;
  right: 5%;
  opacity: .5rem;
  z-index: -1;
`
