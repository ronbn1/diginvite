import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  p,h1,h2,li{
    color:#3C3744;
    font-family: 'Varela Round', sans-serif;
  }
  a{
    color:inherit;
    text-decoration:none;
    &:hover{
      color:inherit;
      text-decoration:none;
    }
  }
`;
