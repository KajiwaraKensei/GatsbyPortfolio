export type workType = {
  platform: "web" | "mobile";
  name: string;
  images: string[];
  briefDescription: string;
};
export type worksType = workType[];

const works: worksType = [
  {
    platform: "web",
    name: "SKYPage",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/portfolio-kaji.appspot.com/o/S__7241735.jpg?alt=media&token=882634b4-f0ab-4485-b738-619dae221eaa",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-kaji.appspot.com/o/contact.jpg?alt=media&token=251c267c-cfdd-476b-b675-dbf8020fc7b9",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-kaji.appspot.com/o/top.jpg?alt=media&token=e24d60f7-5f00-4c00-b5dd-a3d6393b0465"
    ],
    briefDescription: "This is a simple description of this app."
  },
  {
    platform: "web",
    name: "Makers",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/portfolio-kaji.appspot.com/o/S__7241735.jpg?alt=media&token=882634b4-f0ab-4485-b738-619dae221eaa",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-kaji.appspot.com/o/contact.jpg?alt=media&token=251c267c-cfdd-476b-b675-dbf8020fc7b9"
    ],
    briefDescription: "This is a simple description of this app."
  },
  {
    platform: "web",
    name: "PORTFOLIO_TEMPLATE",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/portfolio-kaji.appspot.com/o/top.jpg?alt=media&token=e24d60f7-5f00-4c00-b5dd-a3d6393b0465"
    ],
    briefDescription: "This is a simple description of this app."
  },
  {
    platform: "web",
    name: "PORTFOLIO_TEMPLATE1",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/portfolio-kaji.appspot.com/o/top.jpg?alt=media&token=e24d60f7-5f00-4c00-b5dd-a3d6393b0465"
    ],
    briefDescription: "This is a simple description of this app."
  },
  {
    platform: "web",
    name: "PORTFOLIO_TEMPLATE2",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/portfolio-kaji.appspot.com/o/top.jpg?alt=media&token=e24d60f7-5f00-4c00-b5dd-a3d6393b0465"
    ],
    briefDescription: "This is a simple description of this app."
  }
];

export default works;
export { works };
