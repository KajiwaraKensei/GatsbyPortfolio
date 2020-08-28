export type profile = {
  name: [string, string]
  image: string
  careers: Career[]
  introductions: Career[]
  selfIntroduction: string
  github: string
  tel: string
  mail: string
  twitter: string
}

export type Career = {
  year: string
  event: string
}

export const profile: profile = {
  name: ["kajiwara", "kensei"],
  github: "KajiwaraKensei",
  twitter: "5mpjtj",
  tel: "09028070449",
  mail: "kd1270632@st.kobedenshi.ac.jp",
  image: "profile.jpg",
  careers: [{ year: "2021 ~ ", event: "とある会社に内定済み" }],
  introductions: [
    { year: "2018 03", event: "岡山県立岡山操山高等学校 卒業" },
    { year: "2018 04", event: "神戸電子専門学校 ITスペシャリリスト学科 入学" },
    { year: "2021 03 ", event: "神戸電子専門学校 卒業見込み" },
  ],
  selfIntroduction:
    "趣味は参考書を買うことです。\nMy hobby is to buy reference books. I have purchased over 30 books so far.",
}
export default profile
