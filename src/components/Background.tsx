import { useLayoutEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled, { keyframes } from "styled-components";
import { isDarkState } from "../atoms";
interface BoxShadow {
  boxShadow: any;
}

const animation = keyframes`
  from {
		transform: translateY(0px);
	}

	to {
		transform: translateY(-2000px);
	}
`;

const Star1 = styled.div<BoxShadow>`
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: ${(props) => props.boxShadow};
  animation: ${animation} 50s linear infinite;

  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: ${(props) => props.boxShadow};
  }
`;

const Star2 = styled.div<BoxShadow>`
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: ${(props) => props.boxShadow};
  animation: ${animation} 100s linear infinite;

  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: ${(props) => props.boxShadow};
  }
`;

const Star3 = styled.div<BoxShadow>`
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: ${(props) => props.boxShadow};
  animation: ${animation} 150s linear infinite;

  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: ${(props) => props.boxShadow};
  }
`;

const BackgroundContainer = styled.div`
  position: absolute;
`;

function Background() {
  const isDark = useRecoilValue(isDarkState);
  const [darkThemeStars, setDarkThemeStars] = useState<String[]>([]);
  const [lightThemeStars, setLightThemeStars] = useState<String[]>([]);

  const multipleBoxShadow = (n: number, color: string) => {
    let value = `${Math.floor(Math.random() * 2000 + 1)}px ${Math.floor(
      Math.random() * 2000 + 1
    )}px ${color}`;

    for (let i = 2; i <= n; i++) {
      value += `, ${Math.floor(Math.random() * 2000 + 1)}px ${Math.floor(
        Math.random() * 2000 + 1
      )}px ${color}`;
    }

    return value;
  };

  useLayoutEffect(() => {
    setDarkThemeStars([
      multipleBoxShadow(700, "#fff"),
      multipleBoxShadow(200, "#fff"),
      multipleBoxShadow(100, "#fff"),
    ]);
    setLightThemeStars([
      multipleBoxShadow(700, "#000"),
      multipleBoxShadow(200, "#000"),
      multipleBoxShadow(100, "#000"),
    ]);
  }, []);

  return (
    <BackgroundContainer>
      <Star1 boxShadow={isDark ? darkThemeStars[0] : lightThemeStars[0]} />
      <Star2 boxShadow={isDark ? darkThemeStars[1] : lightThemeStars[1]} />
      <Star3 boxShadow={isDark ? darkThemeStars[2] : lightThemeStars[2]} />
    </BackgroundContainer>
  );
}

export default Background;
