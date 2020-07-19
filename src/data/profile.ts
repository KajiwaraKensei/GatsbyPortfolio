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
  name: ["Kajiwara", "Kensei"],
  github: "KajiwaraKensei",
  twitter: "5mpjtj",
  tel: "09028070449",
  mail: "kd1270632@st.kobedenshi.ac.jp",
  image: "profile.jpg",
  careers: [
    { year: "2020", event: "Graduated from Kobe Electronics College" },
    { year: "2022", event: "Graduated from Kobe Electronics College" },
    { year: "2022 ~ ", event: "Graduated from Kobe Electronics College" },
  ],
  introductions: [
    { year: "2011", event: "Entered Kobe Electronics College." },
    { year: "2020", event: "Graduated from Kobe Electronics College" },
    { year: "2021 ~ 2022", event: "Joined Kobe Electronics College" },
  ],
  selfIntroduction:
    "My hobby is to buy reference books. I have purchased over 30 books so far.",
}
export default profile
