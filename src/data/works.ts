export type workType = {
  platform: "web" | "mobile"
  name: string
  icon: string
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
    name: "Portfolio2",
    workDay: "2020 07",
    briefDescription: "",
    icon: "gat_icon.png",
    backgroundImage: "gatsby/not_found.png",
    languages: [
      {
        name: "Gatsby.js",
        reason: [
          "SSG(Static Site Generator)のお試し。Next.jsでもできるとのこと。",
          "Graphql が組み込まれていて画像の最適化が簡単に実装可能。",
        ],
      },
      {
        name: "Netlify",
        reason: [
          "ホスティングサービスです。サイトの公開に使用しました。",
          "Github とリンクさせて, Github にマージしたタイミングで公開しているサイトを自動更新してくれます。",
        ],
      },
      {
        name: "Typescript",
        reason: [
          "Gatsby.js を Javascript ではなく、Typescript で開発することで、型の恩恵を受けながら開発しました。",
        ],
      },
    ],
    contents: [
      {
        headline: "動機",
        type: "article",
        styled: "padding-bottom: 0;",
        value:
          "「自分のホームページを作りなさい」という学校の授業の一貫で制作しました。自分のためになるサイトを作りたかったので、以前に作ったポートフォリオサイトをパワーアップすることにしました。",
      },
      {
        type: "article",
        styled: "padding-top: 0;",
        value:
          "そのまま HTML と CSS , Javascript で制作は芸がないですし、面倒そうだったので、Gatsby.js を使うことにしました。\nGatsby.js は React ベースとなっており、部品単位にファイルを区切れるので、管理がしやすいです。また繰り返しの部分を変数や関数を使って簡略化でき、変更に強いです。",
      },
      {
        headline: "力を入れた点",
        type: "article",
        image: "gatsby/skill.png",
        imagePosition: "underHeadline",
        value:
          "SKILLS の部分の習熟度の円の表示は SVG を使って表示しています。\n毎回パラメーターを計算して書き直していては効率が悪いので、関数化して、引数で習熟度を渡したら自動で円を計算して表示できるようにしました。",
      },
    ],
  },
  {
    platform: "web",
    name: "ごちナビ",
    workDay: "2020 07",
    briefDescription: "",
    icon: "goti_icon.png",
    backgroundImage: "gotinabi/gotinavi-kate.png",
    languages: [],
    contents: [],
  },
  {
    platform: "web",
    name: "Makers",
    briefDescription: "文章をテンプレート化し、作業効率UP↑",
    workDay: 2020,
    icon: "makers-icon.png",
    backgroundImage: "makersicon.png",
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
  {
    platform: "web",
    name: "PortfolioTemplate ver 1",
    briefDescription: "変数いじるだけでポートフォリオサイトが作れます。",
    workDay: 2020,
    icon: "portfolio_template_icon.png",
    backgroundImage: "portfolio_template_back.png",
    languages: [
      {
        name: "React.js",
        reason: [
          "JSでWebのアプリを作りたかったため",
          "HTML と CSS だけでは機能不足だったため。",
        ],
      },
      {
        name: "Typescript",
        reason: [
          "型を使って予測の精度が上がるため。また実行前にエラーを出してくれるため、快適に開発できる。",
        ],
      },
      {
        name: "Styled Components",
        reason: [
          "CSS in Javascript で 動的にcssの中身を書き換えることができ、レスポンシブに対応しやすくするため。",
        ],
      },
    ],
    contents: [
      {
        type: "article",
        value:
          "このサイトはReact.jsを使用し、ページの表示する内容に変数を使うことで、よりメンテナンスがしやすいテンプレートアプリになっています。",
        headline: "Differentiation",
        styled: "padding-bottom: 0;",
        image: "template_code.png",
        imagePosition: "bottom",
      },
      {
        type: "article",
        value:
          "Typescriptで肩を使用しているので、必須項目が抜けていてもエラーでどこが間違っているかわかります。",
        styled: "margin-top: 0",
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
