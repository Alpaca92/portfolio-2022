import thumb_dnd_memo from "../images/thumb_dnd_memo.png";
import thumb_wecry from "../images/thumb_wecry.png";
import thumb_netflix from "../images/thumb_netflix.png";

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
    id: 3,
    image: thumb_netflix,
    title: "Netflix clone",
    categories: [
      "React.js",
      "Styled-components",
      "Recoil",
      "Typescript",
      "React-query",
      "Framer-motion",
    ],
    description: "Netflix 클론. react-query를 사용하여 data fetching.",
    link: "https://ayaan-netflix-clone.netlify.app/",
    github: "https://github.com/Alpaca92/netflix-clone",
  },
  {
    id: 2,
    image: thumb_dnd_memo,
    title: "Drag and Drop Memo",
    categories: ["React.js", "Styled-components", "Recoil", "Typescript"],
    description:
      "Kanban 스타일의 Todo list 웹사이트. react-beautiful-dnd를 사용하여 Drag and Drop을 지원.",
    link: "https://alpaca92.github.io/dnd-memo",
    github: "https://github.com/Alpaca92/dnd-memo",
  },
  {
    id: 1,
    image: thumb_wecry,
    title: "내가 만약 아캐인 캐릭터라면?",
    categories: ["Javascript", "HTML", "CSS"],
    description:
      "심리테스트 스타일의 웹사이트. Kakao API를 통한 '공유하기' 사용 가능.",
    link: "https://wacry.netlify.app",
    github: "https://github.com/Alpaca92/wacry",
  },
] as ProjectData[];
