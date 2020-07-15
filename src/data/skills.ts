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
    name: "JavaScript",
    proficiencyLevel: 24,
    description:
      "It was the first thing I learned and the first thing that inspired me to create a web app.",
    works: [],
  },
  {
    name: "TypeScript",
    proficiencyLevel: 75,
    description:
      "It's my favorite programming language. I would like to use it actively.",
    works: [],
  },
  {
    name: "React.JS",
    proficiencyLevel: 65,
    description: "This is my favorite of all the JavaScript libraries.",
    works: [],
  },
  {
    name: "Next.JS",
    proficiencyLevel: 75,
    description: "I'm hoping to learn Gatsby next.",
    works: [],
  },
  {
    name: "PHP",
    proficiencyLevel: 100,
    description: "Just enough to remember the grammar.",
    works: [],
  },
]

export default skills
