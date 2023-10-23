import { createGlobalStyle } from "styled-components"
const GlobalStyles = createGlobalStyle`
  *{
    padding:0;
    margin:0
  }
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'Plus Jakarta Sans', sans-serif;
    
  }

  a {
    color:inherit;
    text-decoration:none;
  }
`
export default GlobalStyles
