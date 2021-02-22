export type workType = {
  platform: "web" | "mobile" | "pc"
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
  alt?: string
}

export type Article = {
  type: "article"
  headline?: string // title
  value: string // 中身
  styled?: string // スタイル styled-components にそのまま渡す
  image?: string // 画像　タイトルのした
  imagePosition?: "top" | "bottom" | "underHeadline"
  width?: string | number
  alt?: string
}
const works: worksType = [
  {
    github: "https://github.com/KajiwaraKensei/WorkPACK",
    demo: "https://euchre.jimdosite.com/",
    platform: "pc",
    name: "WorkPACK",
    workDay: "2021 01",
    briefDescription: "",
    icon: "workPack/logo.png",
    backgroundImage: "workPack/linkedin_banner_image_1.png",
    languages: [
      {
        name: "Electron",
        reason: ["SlackやVSCodeに採用されており興味があったため。", "PCの色々な機能を触ってみたかった。"]
      },
      {
        name: "Typescript",
        reason: ["実行前にある程度エラーを表示してくれるため。", "Javascriptだけにはもう戻れない。"]
      },
      {
        name: "Next.js",
        reason: ["表示に使用。", "React Love!"]
      },
      {
        name: "GoogleClassroomAPI",
        reason: [
          "学校でGoogleClassroomを使用しており、授業の情報を引っ張ってくるため使用。",
        ]
      }
    ],
    contents: [
      {
        type: "article",
        headline: "WorkPACKとは？",
        styled: "",
        value: "WorkPACKを使うことで、GoogleClassroomをより便利に！GoogleClassroomAPIを活用し、授業の情報がよりわかりやすく、課題に取り組みやすくできます。"
      },
      {
        type: "image",
        image: ["workPack/logo.png"],
        width: "20rem",
        styled: "margin-bottom: 3rem;"
      },
      {
        type: "article",
        headline: "特徴",
        value: "1. 未提出の課題が提出期限順に並ぶのでどれから取り組めばいいかわかりやすい。",
        image: "workPack/workList.png",
        imagePosition: "bottom",
      },
      {
        type: "article",
        headline: "",
        value: "2. 自由に授業の情報をカスタマイズでき、課題の提出までがスムーズ。",
        image: "workPack/board.png",
        imagePosition: "bottom",
      },
      {
        type: "article",
        headline: "",
        value: "3. 色々なウィジェットの追加可能。",
        image: "workPack/wi.png",
        imagePosition: "bottom",
      },
      {
        type: "article",
        headline: "きっかけ",
        value: "学校の授業の一環で作りました。アプリのコードはほとんど自分が担当しています。",
        styled: "padding-bottom: 0;",
      },
      {
        type: "article",
        styled: "padding-bottom: 0;",
        value: "この内容にしたきっかけですが、従来のGoogleClassroomは、課題の提出までの工程が多く面倒に感じていたため、「アプリにドラッグ&ドロップだけで提出」をできるようにしたかったのがきっかけです。"
      },
      {
        type: "article",
        value: "最初はよかったのですが、開発が進んでいく途中でClassroomの仕様上、APIからの提出は実質不可能だと判明したため、コンセプトが「課題に取り組みやすいように特化する」に変わって今のアプリになりました。"
      },
      {
        type: "article",
        headline: "困ったこと",
        styled: "padding-bottom: 0;",
        value: "GoogleAPIの認証で取得したトークンが、デフォルトだとコピペでアプリに貼り付けてくださいとなっており、UX的に自動で取得できるようにしたかったため苦戦した。",
      },
      {
        type: "article",
        value: "リダイレクト先の設定もできたが、リダイレクト先を認証させる設定の方法がわからなかった。",
        styled: "padding-bottom: 0;",
      },
      {
        type: "article",
        value: "結局デフォルトの設定のままで、Electron側からtitleの中にあるトークンを取得するようにして実装できた。",
        styled: "padding-bottom: 0;",
      },
      {
        type: "image",
        image: ["workPack/auth.jpeg"],
        width: "30rem"
      }
    ],

  },
  {
    github: "https://github.com/KajiwaraKensei/GatsbyPortFolio",
    demo: "https://kaji-pf.netlify.app/",
    platform: "web",
    name: "Portfolio2",
    workDay: "2020 07",
    briefDescription: "",
    icon: "profile.jpg",
    backgroundImage: "gatsby/back.png",
    languages: [
      {
        name: "Gatsby.js",
        reason: [
          "SSG(Static Site Generator)のお勉強。最近よくGatsby.jsの情報を見かけるので。",
          "Graphql が組み込まれていて画像の最適化が簡単に実装可能。",
        ],
      },
      {
        name: "Styled-Component",
        reason: [
          "CSS in Javascript。CSSに変数を埋め込めれるので、レスポンシブやアニメーションに対応しやすい。",
          "今回はパフォーマンスを意識したサイトなので、若干動作が気になった。",
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
          "Typescript で開発することで、型の恩恵を受けながら開発しました。",
          "ファイルパスを短縮して絶対パスで記述できます。",
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
        alt: "",
        value:
          "「自分のホームページを作りなさい」という学校の授業の一貫で制作しました。自分のためになるサイトを作りたかったので、以前に作ったポートフォリオサイトをパワーアップすることにしました。",
      },
      {
        type: "article",

        value:
          "そのまま HTML と CSS , Javascript で制作は芸がないですし、面倒そうだったので、フレームワークにGatsby.js を使うことにしました。\nGatsby.js は React ベースとなっており、React を勉強していたので比較的簡単に習得できました。また JSX 表記で繰り返しの部分を簡略化でき、変更や修正に強いです。",
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
          "PWA(Progressive Web App) に対応したと言っても、gatsby はプラグインが充実しているので、PWAのプラグインをインストールし、設定を少しした程度で、導入は簡単です。\nブラウザのキャッシュが効くようになるので、２回目以降のロードがかなり早くなったり、オフラインでも利用可能です。",
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
        type: "article",
        headline: "画像の最適化",
        value:
          "Gatsby.js には GraphQL がデフォルトで組み込まれており画像の最適化が簡単に実装できます。読み込み時は小さい画像を表示し、必要になった時点で元のサイズの画像を読み込んで置き換えてくれます。",
      },
      {
        type: "image",
        image: ["gatsby/cash2.png", "gatsby/cash1.png"],
        width: "15rem",
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
    github: "https://github.com/KajiwaraKensei/Chrome",
    demo: "https://chrome.google.com/webstore/detail/tabbedloco/gjkimeigokcegoaachnjbnppffanilmc",
    platform: "web",
    name: "tabbed_loco",
    workDay: "2020 10",
    icon: "loco/icon.jpg",
    briefDescription: "",
    backgroundImage: "loco/bc.png",
    languages: [
      {
        name: "React.js",
        reason: ["表示に使用"]
      },
      {
        name: "Typescript",
        reason: ["webpackでビルドして公開"]
      }
    ],
    contents: [
      {
        type: "article",
        headline: "特徴",
        value: "開いているチャンネルを他の人と共有できます。共有先の設定は簡単で同じキーワードを登録しているだけで共有できます。"
      },
      {
        type: "image",
        image: ["loco/conf.png"],
      },
      {
        type: "article",
        value: "共有されるとアラートで確認できます。設定からアラートで確認を切ることもできます。"
      }
    ]
  },
  {
    github: "https://github.com/KajiwaraKensei/Makers",
    demo: "https://ms-0201-sc.herokuapp.com",
    platform: "web",
    name: "Makers",
    briefDescription: "文章をテンプレート化し、作業効率UP↑",
    workDay: "2020 02",
    icon: "favicon.png",
    backgroundImage: "makersicon.png",
    languages: [
      {
        name: "Next.js",
        reason: [],
      },
      {
        name: "Docker",
        reason: [],
      },
      {
        name: "Express",
        reason: [],
      },
      {
        name: "MongoDB",
        reason: [],
      },
    ],
    contents: [],
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
          "エラー処理が大変でした。初心者なのも相まって実装部分をかなりの頻度で変更していて、実際に実行しないとエラーが出ないので、動作確認が大変でした。\n",
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
    icon: "my.jpg",
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
