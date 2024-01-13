import styled from 'styled-components';

export const Introductioncontainer = styled.div`
  background-image: url(https://artbyraff.com/wp-content/themes/storefront-child-theme-master/assets/images/bgIntroduction.jpg);
  height: 777px;

  @media (max-width: 991px) {
    width: auto;
    max-width: max-content;
    margin: 0;
    padding: 0;
    height: fit-content;
  }
`;
export const Brushimage = styled.img``;

export const Hadecontainer = styled.div`
  padding: 0 15px;
  margin: 0 auto;
  max-width: 1128px;
  width: 100%;

  @media (max-width: 991px) {
    width: auto;
    max-width: fit-content;
    margin: 0;
    padding: 0;
  }
`;

export const Headingtitle = styled.div`
  font-family: Graphik-Super;
  font-size: 102px;
  line-height: 0.98;
  letter-spacing: 19.38px;
  color: #4b4b4b;
  text-transform: uppercase;
  margin-bottom: 0;
  position: relative;
  left: -25px;

  @media (max-width: 991px) {
    font-size: 23px;
    margin: 0 0 23px 164px;
    padding: 0;
    letter-spacing: 5px;
  }
`;

export const Textstylebox = styled.div``;

export const Welcomestyle = styled.div`
  font-family: Graphik-Semibold;
  font-size: 88px;
  font-weight: 600;
  line-height: 0.51;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  left: -276px;
  top: 118px;
  color: #1c1b1c;

  @media (max-width: 991px) {
    font-size: 35px;
    padding: 0 0 63px 297px;
  }
`;

export const Content = styled.div`
  color: #ffffff;
  box-sizing: border-box;
  display: block;
  font-family: Graphik-Light;
  font-size: 22px;
  font-weight: 300;
  line-height: 1.77;
  text-align: left;
  color: #d8d8d8;
  margin: 80px 0 0 0;
  border-left: 5px solid #d8cf91;
  padding: 0 0 0 67px;
  max-width: 967px;
  width: 100%;

  @media (max-width: 991px) {
    margin: 16px 18px 12px 25px;
    font-size: 10px;
  }
`;

export const Contentbox = styled.div`
  display: flex;
`;

export const InnerWrapper = styled.div`
  max-width: 1128px;
  width: 100%;
  margin: 0 auto;
`;
