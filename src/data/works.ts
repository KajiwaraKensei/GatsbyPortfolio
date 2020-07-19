export type workType = {
  platform: "web" | "mobile"
  name: string
  icon: string

  images: string[] // 画像は static に入れてください
  backgroundImage: string
  rootImagePath?: string
  briefDescription: string
  workDay?: string | number
  contents: (ImageContent | Article)[]
  languages: { name: string; reason: string[] }[]
}
export type worksType = workType[]
export type ImageContent = {
  type: "image"
  headline?: string
  image: string[]
  width?: string
  height?: string
  styled?: string
}

export type Article = {
  type: "article"
  headline?: string // title
  value: string // 中身
  styled?: string // スタイル styled-components にそのまま渡す
  image?: string // 画像　タイトルのした
  imagePosition?: "top" | "bottom" | "underHeadline"
}
const works: worksType = [
  {
    platform: "web",
    name: "SKYPage",
    images: ["01f.jpg", "my.jpg", "log.jpg"],
    briefDescription: "This is a simple description of this app.",
    icon: "log.jpg",
    backgroundImage: "my.jpg",
    contents: [],
    languages: [],
  },
  {
    platform: "web",
    name: "Makers",
    images: ["my.jpg", "my.jpg"],
    briefDescription: "This is a simple description of this app.",
    workDay: 2020,
    icon: "01f.jpg",
    backgroundImage: "01f.jpg",
    languages: [
      {
        name: "Next.js",
        reason: [
          "Because I wanted to do SSR(ServerSideRendering). Also, since I had learned React, I wanted to step up to the next level.",
          "Used in the front end",
          "Developed in Typescript",
        ],
      },
      {
        name: "Docker",
        reason: [
          "I wanted to get all the servers up and running with one command.",
          "Used in development environments",
          "As long as you have Docker on other people's computers, you can easily build apps.",
        ],
      },
      {
        name: "Express",
        reason: [
          "Used for the API server",
          "I wanted to develop the backend with Javascript because I had learned Javascript in the front end first.",
          "Developed in Typescript",
          "Transpile with webpack",
        ],
      },
      {
        name: "MongoDB",
        reason: [
          "Used for database",
          "I wanted to touch No-SQl. And because there were many reference materials.",
        ],
      },
    ],
    contents: [
      {
        type: "article",
        value:
          "The best thing about this app is that it allows you to turn your text into a template. You can template your daily work reports and create sentences effortlessly.",
        headline: "Differentiation",
        styled: "",
        image: "makers_ii.png",
        imagePosition: "bottom",
      },
      {
        type: "article",
        value:
          'This site is responsive.  It uses a CSS in Javascript called "Styled-Components" to make the site responsive. It dynamically generates CSS to fit the width of the screen.',
        headline: "Responsive Support",
        styled: "margin-top: 5rem;",
      },
      {
        type: "image",
        image: ["maker_r_1.png"],
        width: "100%",
      },
      {
        type: "image",
        image: ["maker_r_2.png"],
        width: "60%",
        styled: "padding: 0;",
      },
    ],
  },
]

export default works
export { works }
