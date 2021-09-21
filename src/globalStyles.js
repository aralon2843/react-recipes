import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const globalStyles = createGlobalStyle`
  ${normalize}
  * {
    padding: 0;
    margin: 0;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #F4F8FB;
    font-size: 14px;
    color: #323232;
    a {
      color: inherit;
      text-decoration: none;
    }
    &::-webkit-scrollbar {
      width: 7px;
      
    }
     
    &::-webkit-scrollbar-track {
      background-color: #f1f8fe;
    }
     
    &::-webkit-scrollbar-thumb {
      background-color: #43b1f4;
      border-radius: 5px;
    }
  }
`;
export default globalStyles;
