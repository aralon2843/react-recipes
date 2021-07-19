import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'

const globalStyles = createGlobalStyle`
  ${normalize}
  body {
    font-family: 'Open Sans', sans-serif;
    background-color: #A2E3C4;
    font-size: 14px;

  }
`
export default globalStyles
