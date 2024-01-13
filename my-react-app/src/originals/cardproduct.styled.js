import styled from 'styled-components';

export const Unorderlist = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const ListProduct = styled.li`
  border: 1px solid #eeeeee;
  width: 20%;
  margin: 64px 44px 44px 0;
  min-width: 247px;
  min-height: 362px;
  position: relative;
  transition: opacity 1s ease;
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: translateY(-20px);
  }

  @media (max-width: 991px) {
  }
`;

export const Productproperties = styled.div`
  text-align: center;
`;

export const Productimage = styled.div`
  position: absolute;
  top: -60px;
  left: -30px;
  z-index: 2;
  min-height: 250px;
  max-height: 250px;
  max-width: 247px;
  min-width: 247px;
`;

export const Product = styled.img`
  min-height: 305px;
  max-height: 305px;
  max-width: 247px;
  min-width: 247px;
`;

export const Productname = styled.div``;

export const Productdescription = styled.div`
  text-align: left;
  padding: 22px 20px 22px 25px;
  position: relative;
  margin: 250px 0 0 0;
`;

export const Producttitle = styled.div``;

export const ProductPrice = styled.div``;

export const Properties = styled.div`
  color: #ffffff;
`;

export const Pricewrapper = styled.span`
  font-family: Graphik-Bold;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  margin: 2px 0 9px;
`;

export const Contentwrapper = styled.div`
  font-family: Graphik;
  font-size: 13px;
  line-height: 1.15;
  color: #919191;
  text-transform: uppercase;
  width: 80%;
`;
