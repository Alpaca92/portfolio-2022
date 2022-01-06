import { useLayoutEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled, { keyframes } from "styled-components";
import { isDarkState } from "../atoms";
interface BoxShadow {
  boxShadow?: string;
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
  const [darkThemeShadows, setDarkThemeShadows] = useState<String[]>([]);
  const [lightThemeShadows, setLightThemeShadows] = useState<String[]>([]);

  const BoxShadows = (n: number, color: string) => {
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
    setDarkThemeShadows([
      BoxShadows(700, "#fff"),
      BoxShadows(200, "#fff"),
      BoxShadows(100, "#fff"),
    ]);
    setLightThemeShadows([
      BoxShadows(700, "#000"),
      BoxShadows(200, "#000"),
      BoxShadows(100, "#000"),
    ]);
  }, []);

  return (
    <BackgroundContainer>
      <Star1
        boxShadow={
          isDark
            ? darkThemeShadows[0]?.toString()
            : lightThemeShadows[0]?.toString()
        }
      />
      <Star2
        boxShadow={
          isDark
            ? darkThemeShadows[1]?.toString()
            : lightThemeShadows[1]?.toString()
        }
      />
      <Star3
        boxShadow={
          isDark
            ? darkThemeShadows[2]?.toString()
            : lightThemeShadows[2]?.toString()
        }
      />
    </BackgroundContainer>
  );
}

export default Background;
