import { Switch } from "@mui/material";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkState } from "../atoms";
import darkSvg from "../assets/images/darkSvg";
import lightSvg from "../assets/images/lightSvg";

const Switcher = styled(Switch)<{ $isDark: number }>`
  & .Mui-checked {
    transform: translateX(12px);
  }

  & .MuiSwitch-thumb {
    width: 26px;
    height: 26px;
    background-color: ${(props) => props.theme.switcherThumbColor};

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-repeat: no-repeat;
      background-position: center;
      background-image: url(${(props) => (props.$isDark ? darkSvg : lightSvg)});
    }
  }

  & .MuiSwitch-track {
    margin-top: 0.1875rem;
    opacity: 1;
    background-color: ${(props) => props.theme.switcherBgColor} !important;
    border-radius: 1.25rem;
  }
`;

function Themeswitcher() {
  const [isDark, setIsDark] = useRecoilState(isDarkState);

  const onThemeChange = () => {
    const theme = !isDark;

    setIsDark(theme);
    localStorage.setItem("isDark", JSON.stringify(theme));
  };

  return (
    <Switcher
      defaultChecked={isDark ? true : false}
      onChange={onThemeChange}
      $isDark={isDark ? 1 : 0}
    />
  );
}

export default Themeswitcher;
