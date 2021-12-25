import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
  ${reset};
  a{
    text-decoration: none;
    color: inherit;
  }
  *{
    box-sizing: border-box;
  }
  body{
    font-size: 12px;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: rgba(20, 20, 20, 1);
    color: white;
    padding-top: 70px;
    padding-left: 20px;
  }
  h1{
    font-size: 25px;
    font-weight: bold;
  }
  
`;

export default globalStyles;