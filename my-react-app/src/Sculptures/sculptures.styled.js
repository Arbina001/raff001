import styled from 'styled-components';

export const SculptureSection = styled.section``;

export const SculptureContainer = styled.div`
  background-image: url(https://artbyraff.com/wp-content/themes/storefront-child-theme-master/assets/images/bgPrintArt.jpg);
  background-position: center;
  height: 100%;
`;

export const ProductContainer = styled.section`
  width: 100%;
  max-width: 1185px;
  margin: 0 auto;
`;

export const Headingwrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;

  @media (max-width: 991px) {
    margin: 0;
  }
`;

export const Content = styled.div`
  font-family: Graphik-Semibold;
  font-size: 88px;
  font-weight: 600;
  line-height: 0.51;
  text-align: left;
  text-transform: uppercase;
  color: #1c1b1c;
  position: relative;
  left: -7px;
  top: 104px;
  width: 100%;

  @media (max-width: 991px) {
    font-size: 32px;
    top: 41px;
  }
`;

export const SubTitle = styled.div`
  font-family: Graphik-Super;
  font-size: 102px;
  line-height: 0.98;
  letter-spacing: 19.38px;
  text-align: left;
  text-transform: uppercase;
  padding: 0 0 0 21px;
  margin: 0 0 10px 0;
  color: #4b4b4b;
  z-index: 1;

  @media (max-width: 991px) {
    font-size: 25px;
    letter-spacing: 3px;
  }
`;

export const SculpturesHomeProduct = styled.div``;

export const SculpturesHomeBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;

  @media (max-width: 991px) {
    margin: 0px 23px;
  }
`;

export const SculptureProductGrid = styled.div``;

export const SculptureList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Sculpture = styled.li`
  border: 1px solid #dddddd;
  width: 20%;
  margin: 64px 65px 64px 0;
  min-width: 247px;
  min-height: 362px;
  position: relative;
  transition: opacity 1s ease;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-20px);
  }
`;

export const SculptureContent = styled.div``;

export const ProductImageBox = styled.div`
  position: absolute;
  top: -60px;
  left: -30px;
  z-index: 2;
`;

export const SculptureImage = styled.img`
  min-height: 305px;
  max-height: 305px;
  max-width: 247px;
  min-width: 247px;
`;

export const Productwrapper = styled.div`
  padding: 22px 9px 22px 15px;
  text-align: left;
  padding: 22px 20px 22px 25px;
  position: relative;
  margin: 240px 0 0 0;
`;

export const SculptureTitle = styled.a`
  font-family: 'Graphik';
  font-size: 14px;
  color: #ffffff;
  text-transform: uppercase;
`;

export const SculptureName = styled.div``;

export const SculpturePrice = styled.div`
  font-family: Graphik-Bold;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  margin: 2px 0 9px;
`;

export const SculptureDetails = styled.div`
  margin: 5px 0 0 0;
  font-family: Graphik;
  font-size: 13px;
  line-height: 1.15;
  color: #919191;
  text-transform: uppercase;
  width: 80%;
`;

export const AddCartbutton = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  border: 1px solid #d8cf91;
  padding: 5px 8.2px 6px;
`;

export const Loadmorewrapper = styled.div``;

export const Buttoninnerwrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Loadmorebutton = styled.div`
  border: 1px solid #ffffff;
  border-radius: 30px;
  padding: 15px 30px;
  width: 125px;
  color: #ffffff;
  text-align: center;
`;
