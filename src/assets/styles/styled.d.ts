import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    starColor: string;
    switcherBgColor: string;
    switcherThumbColor: string;
    headerBgColor: string;
    hamburgerBgColor: string;
    hoverColor: string;
    mainColor: string;
  }
}
