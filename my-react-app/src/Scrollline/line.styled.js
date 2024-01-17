import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  left: -27px;
  top: 40%;
  z-index: 1;
`;

export const Unorderwrapper = styled.ul`
  background: none;
  float: left;
  position: relative;
`;

export const Naviagationdesign = styled.li`
  list-style-type: none;
  background-color: #ffffff;
  margin: 6px 0px 0px 0px;
  width: 2px;
  &::before {
    display: contents;
    content: '';
    display: inline-block;
    width: 0px;
    height: 8px;
    padding: 20px 0 0 0;
  }
`;

export const Linedesign = styled.div`
  float: left;
  padding: 0 6px 0 0px;
  background-color: #ffffff;
`;

export const Line = styled.a`
  width: 5px;
  border-radius: 0 1px 1px 0;
  background: #dddddd;
`;
