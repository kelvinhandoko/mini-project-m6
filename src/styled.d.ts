import "styled-components"

import { ThemeType } from "./lib/theme"

declare module "styled-components" {
    export interface DefaultTheme extends ThemeType {} // extends the global DefaultTheme with our ThemeType.
}
