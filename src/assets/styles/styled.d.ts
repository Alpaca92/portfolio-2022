import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgBottomColor: string;
    bgTopColor: string;
    starColor: string;
    switcherBgColor: string;
    switcherThumbColor: string;
    textColor: string;
  }
}
