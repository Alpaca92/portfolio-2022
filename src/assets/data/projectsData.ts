import thumb_wecry from "../images/thumb_wecry.png";

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
    image: thumb_wecry,
    title: "내가 만약 아캐인 캐릭터라면?",
    categories: ["Javascript", "HTML", "CSS"],
    description:
      "심리테스트 스타일의 웹사이트. Kakao API를 통한 '공유하기' 사용 가능.",
    link: "https://wacry.netlify.app",
    github: "https://github.com/Alpaca92/wacry",
  },
] as ProjectData[];
