import styled from 'styled-components';

export const Bannerwrapper = styled.div`
  color: #ffffff;
  width: 100%;
  height: 100%;
  transition: 0.4s ease-in-out;
  background-size: cover;
  display: flex;
  flex-direction: column;
  background: url(https://artbyraff.com/wp-content/uploads/2021/03/820870D6-04C6-4081-B048-A2B6C3FBAE51.jpg);
`;

export const Homepagesection = styled.div`
  position: relative;
`;

export const Homeslider = styled.div`
  position: relative;
  box-sizing: border-box;
`;

export const Drageblehome = styled.div``;

export const Slicktrack = styled.div`
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
  }
`;
export const Mainbox = styled.div`
  height: 777px;
  position: relative;

  @media (max-width: 991px) {
    background-size: cover;
    background-position: center;
  }
`;

export const ButoonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 773px;
  z-index: 1;
`;

export const AnchorButton = styled.a`
  width: 100%;
  max-width: 37px;
  font-size: 13px;
  font-weight: bold;
  line-height: 1.31;
  color: #ffffff;
  text-transform: uppercase;
  border: 1px solid #fff;
  border-radius: 25px;
  padding: 22px 96px;
`;
