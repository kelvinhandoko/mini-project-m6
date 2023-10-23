import { ReactNode } from "react"
import GlobalStyles from "./lib/GlobalStyles"

import { lightTheme } from "./lib/theme"
import { ThemeProvider } from "styled-components"

const Provider = ({ children }: { children: ReactNode }) => {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    )
}

export default Provider
