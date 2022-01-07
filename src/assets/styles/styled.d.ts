import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgBottomColor: string;
    bgTopColor: string;
    starColor: string;
    switcherBgColor: string;
    switcherThumbColor: string;
    headerBgColor: string;
    hamburgerBgColor: string;
    hamburgerHoverColor: string;
    textColor: string;
  }
}
