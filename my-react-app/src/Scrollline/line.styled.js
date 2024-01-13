import styled from "styled-components";
export const LeftScrollContainer = styled.div`
  position: fixed;
  left: -27px;
  top: 40%;
  z-index: 1;
`;
export const UnorderLogoContainer = styled.ul`
  background: none;
  float: left;
  position: relative;
`;
export const NaviagationDesign = styled.li`
  list-style-type: none;
  background-color: #fff;
  margin: 6px 0px 0px 0px;
  width: 2px;
  &::before {
    display: contents;
    content: "";
    display: inline-block;
    width: 0px;
    height: 8px;
    padding-top: 20px;
  }
`;
export const LineDEsign = styled.div`
  float: left;
  padding: 0 6px 0 0px;
  background-color: #fff;
`;
export const Line = styled.a`
  width: 5px;
  border-radius: 0 1px 1px 0;
  background: #ddd;
`;