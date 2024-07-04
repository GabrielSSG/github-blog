import "styled-components";
import { defaultTheme } from "../styles/theme/default";

declare module "styled-components" {
  export interface DefaultTheme extends defaultTheme {}
}
