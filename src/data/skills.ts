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
    proficiencyLevel: 60,
    description:
      "React の学習の延長。SSG ができるということで。このサイトは Gatsby.js を使用しています。",
    works: [],
  },
  {
    name: "Next.js",
    proficiencyLevel: 60,
    description:
      "React の学習の延長。SSR の勉強のために学習しました。 Typescript の導入が非常に楽でした。",
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
    description: "一番好きな言語です。Union型が非常に素晴らしい！",
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
    description: "簡単なAPIの作成に使用しました。with MongoDB",
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
