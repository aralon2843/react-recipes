import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'

const globalStyles = createGlobalStyle`
  ${normalize}
  body {
    font-family: 'Open Sans', sans-serif;
    background-color: #A2E3C4;
    font-size: 14px;
    margin: 0;  
    a {
      color: inherit;
      text-decoration: none;
    }
  }
`
export default globalStyles
