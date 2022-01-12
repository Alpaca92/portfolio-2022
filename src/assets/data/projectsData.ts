import image1 from "../images/profile-emoji.png";

export interface ProjectData {
  id: number;
  image: string;
  title: string;
  categories: string[];
  description: string;
  link: string;
  github: string;
}

// test data
export default [
  {
    id: 1,
    image: image1,
    title: "이것은 제목입니다",
    categories: [
      "react.js",
      "vue.js",
      "typescript",
      "javascript",
      "html",
      "css",
    ],
    description:
      "이것은 설명입니다 이것은 설명입니다 이것은 설명입니다 이것은 설명입니다",
    link: "https://www.naver.com/",
    github: "https://github.com/Alpaca92",
  },
  {
    id: 2,
    image: image1,
    title: "이것은 제목입니다22",
    categories: ["react.js", "dJango", "python", "javascript", "html", "css"],
    description: "이것은 설명입니다22",
    link: "https://www.naver.com/",
    github: "https://github.com/Alpaca92",
  },
  {
    id: 3,
    image: image1,
    title: "이것은 제목입니다33",
    categories: ["sexy skill", "React.native"],
    description: "이것은 설명입니다33 이것은 설명입니다33 이것은 설명입니다33",
    link: "https://www.naver.com/",
    github: "https://github.com/Alpaca92",
  },
] as ProjectData[];
