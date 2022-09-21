export type SkillType = {
  name: string
  proficiencyLevel: number
  description: string
  works: {
    url: string
    name: string
  }[]
}
export type SkillTypes = SkillType[]

export const skills: SkillTypes = [
  {
    name: "Gatsby.js",
    proficiencyLevel: 50,
    description:
      "このサイトで使用したぐらいの理解度",
    works: [],
  },
  {
    name: "Next.js",
    proficiencyLevel: 70,
    description:
      "簡単に構築ができるのでよく使用してます。",
    works: [],
  },

  {
    name: "Electron",
    proficiencyLevel: 70,
    description:
      "デスクトップアプリがWebの技術で簡単にできるので、よく業務ツールの作成に使用してます。",
    works: [],
  },

  {
    name: "Svelte",
    proficiencyLevel: 30,
    description:
      "仮想Domを使用しないというライブラリで興味持ってます程度。",
    works: [],
  },
  {
    name: "React.JS",
    proficiencyLevel: 90,
    description: "よくほかのフレームワークやライブラリと合わせて使用してるので理解度は高い。",
    works: [],
  },
  {
    name: "Express",
    proficiencyLevel: 60,
    description: "APIサーバーによく使用してます。",
    works: [],
  },
  {
    name: "JavaScript",
    proficiencyLevel: 70,
    description: "Webアプリでよく使用してるので理解度高いです。",
    works: [],
  },
  {
    name: "TypeScript",
    proficiencyLevel: 85,
    description: "一番好きな言語です。導入できる場合はほぼ導入してます。",
    works: [],
  },
  {
    name: "PHP",
    proficiencyLevel: 40,
    description: "基本的な文法まで、ある程度完成しているLaravelに機能追加したぐらいの経験",
    works: [],
  },
  {
    name: "Python",
    proficiencyLevel: 30,
    description: "基本的な文法まで、読み書きができる程度",
    works: [],
  },
  {
    name: "C#",
    proficiencyLevel: 25,
    description: "ソフトウェア業務の保守で使用した程度",
    works: [],
  },
  {
    name: "Docker",
    proficiencyLevel: 60,
    description:
      "Docker-Compose を使用して開発環境の構築をよくしてます",
    works: [],
  },
]

export default skills
