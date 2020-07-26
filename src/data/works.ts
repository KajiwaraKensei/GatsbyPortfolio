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
  github: string
  demo: string
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
  width?: string | number
}
const works: worksType = [
  {
    github: "https://github.com/KajiwaraKensei/GatsbyPortFolio",
    demo: "https://kaji-portfolio.netlify.app/",
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
        headline: "Portfolio2とは",
        type: "article",
        styled: "",
        value:
          "このサイトのことです。ポートフォリオサイトです。以前にも作ったことがあり、それのパワーアップしたバージョンです。",
      },
      {
        type: "image",
        image: ["gatsby/top.png"],
        styled: "padding-bottom: 5rem;",
      },
      {
        headline: "動機",
        type: "article",
        styled: "padding-bottom: 0;",
        value:
          "「自分のホームページを作りなさい」という学校の授業の一貫で制作しました。自分のためになるサイトを作りたかったので、以前に作ったポートフォリオサイトをパワーアップすることにしました。",
      },
      {
        type: "article",

        value:
          "そのまま HTML と CSS , Javascript で制作は芸がないですし、面倒そうだったので、Gatsby.js を使うことにしました。\nGatsby.js は React ベースとなっており、部品単位にファイルを区切れるので、管理がしやすいです。また繰り返しの部分を変数や関数を使って簡略化でき、変更に強いです。",
      },
      {
        headline: "力を入れた点",
        type: "article",
        image: "gatsby/skill.png",
        imagePosition: "underHeadline",
        width: "50rem",
        value:
          "SKILLS の部分の習熟度の円の表示は SVG を使って表示しています。\n毎回パラメーターを計算して書き直していては効率が悪いので、関数化して、引数で習熟度を渡したら自動で円を計算して表示できるようにしました。",
      },

      {
        type: "article",
        headline: "PWA対応",
        value:
          "PWA(Progressive Web App) に対応したと言っても、gatsby はプラグインが充実しているので、PWAのプラグインをインストールし、設定を少しした程度で、導入は簡単です。\nService Worker によってキャッシュが効くようになるので、２回目以降のロードがかなり早くなったり、オフラインでも利用可能です。",
      },
      {
        type: "image",
        image: ["gatsby/offline.png"],
        width: "15rem",
      },
      {
        type: "article",
        value:
          "またブラウザの UI を非表示にできるなど、ネイティブアプリのように振る舞えます。",
      },
      {
        type: "article",
        headline: "404ページ",
        image: "gatsby/404.png",
        imagePosition: "bottom",

        value:
          "404ページをコマンドライン風にしてみました。作品名 か home と入力することで正常のページに移動できます。\nコマンドラインになれていない人用に HOME ボタンを置いています。わかりやすいように点滅させるようにしています。",
      },
      {
        headline: "アニメーション",
        type: "article",
        image: "gatsby/animation.png",
        imagePosition: "underHeadline",
        width: "50rem",
        value:
          "アニメーションにも力を入れました。画面の遷移どうでしたでしょうか？遷移を遅らせてその間にアニメーションを入れる感じで実装しました。そこまで触れてこなかったのでいろいろ勉強になりました。",
      },
    ],
  },
  {
    github: "https://github.com/KajiwaraKensei/Makers",
    demo: "https://ms-0201-sc.herokuapp.com",
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
    github: "https://github.com/KajiwaraKensei/gurunaviTask",
    demo: "https://whtite-bd4f.web.app/",
    platform: "web",
    name: "ごちナビ",
    workDay: "2019 07",
    briefDescription: "",
    icon: "goti_icon.png",
    backgroundImage: "gotinabi/gotinavi-kate.png",
    languages: [
      {
        name: "React.js",
        reason: [
          "初めてのWebアプリの制作で、就活に生かせそうな言語なので、それの勉強。",
          "API と通信やマップの利用を簡単に実装したかったため。",
        ],
      },
      {
        name: "Firebase",
        reason: [
          "RealtimeDatabase を使用。評価やコメントを書き込めるように。",
          "ホスティングにも使用。特に困ることなく利用できた。",
        ],
      },
      {
        name: "ぐるなびAPI",
        reason: ["飲食店の情報を取得に利用。"],
      },
    ],
    contents: [
      {
        type: "article",
        image: "gotinabi/goti_t.png",
        imagePosition: "bottom",
        value:
          "現在地を取得し、その周辺の飲食店を検索できるアプリです。ジャンルや検索範囲を変更できます。",
        headline: "ごちナビとは",
      },
      {
        type: "article",
        value:
          "フェンリル株式会社のサマーインターンシップの課題のために作成しました。とにかく形にしないといけなかったので調べながら作成しました。",
        headline: "きっかけ",
      },
      {
        type: "article",
        value:
          "Typescript を習得した今だから思うんですけど、エラー処理が大変でした。初心者なのも相まって実装部分をかなりの頻度で変更していて、実際に実行しないとエラーが出ないので、動作確認が大変でした。\n",
        headline: "感想",
      },
    ],
  },

  {
    github: "https://github.com/KajiwaraKensei/portfolio",
    demo: "https://portfolio-kaji.firebaseapp.com",
    platform: "web",
    name: "Portfolio1",
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
      {
        name: "Firebase",
        reason: [
          "ホスティングサービスと画像のアップロードに使用。",
          "デプロイはビルド→専用のライブラリでコマンドから実行。なので Netlify と比較すると面倒。",
          "無料枠で十分。",
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
          "Typescriptで型を使用しているので、必須項目が抜けていてもエラーでどこが間違っているかわかります。",
        styled: "margin-top: 0",
      },
      {
        type: "article",
        value:
          "レスポンシブに対応しました。基本的に PC | Tablet | Phone の３段階に分けています。",
        headline: "レスポンシブ対応",
        styled: "margin-top: 5rem; padding-bottom: 0;",
      },
      {
        type: "image",
        image: ["portfolio1/pc.png"],
      },
      {
        type: "image",
        image: ["portfolio1/phone.png"],
        width: "60%",
        styled: "padding: .5rem;",
      },
    ],
  },
]

export default works
export { works }
