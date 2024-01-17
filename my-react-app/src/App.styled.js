import styled, { createGlobalStyle } from "styled-components";
import GraphikBold from "./fonts/GraphikFont/GraphikBold.otf";
import GraphikLight from "./fonts/GraphikFont/GraphikLight.otf";
import GraphikSemibold from "./fonts/GraphikFont/GraphikSemibold.otf";
import GraphikSuper from "./fonts/GraphikFont/GraphikSuper.otf";
import GraphikBlack from "./fonts/GraphikFont/GraphikBlack.otf";
import GraphikMedium from "./fonts/GraphikFont/GraphikMedium.otf";
export const GlobalStyles = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    background-color:#000;
  }
  @font-face {
    font-family: 'Graphik-Semibold';
    src: url(${GraphikSemibold}) format('truetype');
    font-style: normal;
  }
  @font-face{
    font-family: 'Graphik-Light';
    src: url(${GraphikLight}) format('truetype');
    font-style: normal;
  }
   @font-face{
    font-family: 'Graphik-Bold';
    src: url(${GraphikBold}) format('truetype');
    font-style: normal;
  }
   @font-face{
    font-family: 'Graphik-Super';
    src: url(${GraphikSuper}) format('truetype');
    font-style: normal;
  }
   @font-face{
    font-family: 'Graphik-Black';
    src: url(${GraphikBlack}) format('truetype');
    font-style: normal;
  }
  @font-face{
    font-family: 'Graphik-Medium';
    src: url(${GraphikMedium}) format('truetype');
    font-style: normal;
  }
`;
export const StyledWrapper = styled.div`
  max-width: 100%;
`;
