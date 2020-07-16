export type workType = {
  platform: "web" | "mobile"
  name: string
  icon: string

  images: string[] // 画像は static に入れてください
  backgroundImage: string
  rootImagePath?: string
  briefDescription: string
  workDay?: string | number
}
export type worksType = workType[]

const works: worksType = [
  {
    platform: "web",
    name: "SKYPage",
    images: ["01f.jpg", "my.jpg", "log.jpg"],
    briefDescription: "This is a simple description of this app.",
    icon: "log.jpg",
    backgroundImage: "my.jpg",
  },
  {
    platform: "web",
    name: "Makers",
    images: ["my.jpg", "my.jpg"],
    briefDescription: "This is a simple description of this app.",
    workDay: 2020,
    icon: "01f.jpg",
    backgroundImage: "01f.jpg",
  },
  {
    platform: "web",
    name: "Gotinabi_task",
    images: ["my.jpg", "my.jpg"],
    briefDescription: "This is a simple description of this app.",
    workDay: 2020,
    icon: "my.jpg",
    backgroundImage: "S__7241731.jpg",
  },
  {
    platform: "web",
    name: "Gotinabi_task2",
    images: ["goti.jpg", "my.jpg"],
    briefDescription: "This is a simple description of this app.",
    workDay: 2020,
    icon: "profile.jpg",
    backgroundImage: "profile.jpg",
  },
]

export default works
export { works }
