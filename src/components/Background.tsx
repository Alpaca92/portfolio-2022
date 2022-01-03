import styled, { keyframes } from "styled-components";

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

const animation = keyframes`
  from {
		transform: translateY(0px);
	}

	to {
		transform: translateY(-2000px);
	}
`;

const Star1 = styled.div`
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: ${(props) => multipleBoxShadow(700, props.theme.starColor)};
  animation: ${animation} 50s linear infinite;

  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: ${(props) => multipleBoxShadow(700, props.theme.starColor)};
  }
`;

const Star2 = styled.div`
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: ${(props) => multipleBoxShadow(200, props.theme.starColor)};
  animation: ${animation} 100s linear infinite;

  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: ${(props) => multipleBoxShadow(200, props.theme.starColor)};
  }
`;

const Star3 = styled.div`
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: ${(props) => multipleBoxShadow(100, props.theme.starColor)};
  animation: ${animation} 150s linear infinite;

  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: ${(props) => multipleBoxShadow(100, props.theme.starColor)};
  }
`;

const BackgroundContainer = styled.div`
  position: absolute;
`;

function Background() {
  return (
    <BackgroundContainer>
      <Star1 />
      <Star2 />
      <Star3 />
    </BackgroundContainer>
  );
}

export default Background;
