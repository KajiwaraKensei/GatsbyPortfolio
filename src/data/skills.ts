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
    proficiencyLevel: 70,
    description:
      "React をベースに SSG ができるということで。このサイトは Gatsby.js を使用しています。",
    works: [],
  },
  {
    name: "Next.js",
    proficiencyLevel: 60,
    description:
      "SSR の勉強のために学習しました。 Typescript の導入が非常に楽で👍",
    works: [],
  },

  {
    name: "JavaScript",
    proficiencyLevel: 50,
    description: "最初に学習した言語なので思い入れがあります。",
    works: [],
  },
  {
    name: "TypeScript",
    proficiencyLevel: 80,
    description: "一番好きな言語です。型を自由につけれるって素晴らしい！",
    works: [],
  },
  {
    name: "React.JS",
    proficiencyLevel: 90,
    description: "最初に学習した Javascript のフレームワークです。",
    works: [],
  },
  {
    name: "Express",
    proficiencyLevel: 60,
    description:
      "簡単なAPIサバーの作成に使用しました。Javascript を使っていたので、そこまで学習コストはかかりませんでした。",
    works: [],
  },
  {
    name: "Docker",
    proficiencyLevel: 50,
    description:
      "Docker-Compose を使用し、 Lamp 環境を構築したり、アプリの開発環境に使用しています。",
    works: [],
  },
  {
    name: "PHP",
    proficiencyLevel: 25,
    description: "超基本的な文法のみ",
    works: [],
  },
]

export default skills
