import styled from 'styled-components';

export const Aboutsection = styled.section`
  background-color: #161515;
  display: flex;
  justify-content: left;
      padding: 141px 0px 0px 0px;

  @media (max-width: 911px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Rightsidebox = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
  max-width: 50%;
`;

export const Leftbox = styled.div`
  display: flex;
  justify-content: left;
  font-family: Graphik-Light;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.94;
  text-align: left;
  color: #d8d8d8;
  width: 100%;
  /* max-width: 50%; */
  flex-direction: column;
  padding: 0 0 0 96px;

  @media (max-width: 911px) {
    margin: 34px 70px 0px 0px;
  }
`;

export const Discriptiondetails = styled.div``;

export const Imagefuntion = styled.img`
  @media (max-width: 911px) {
    /* max-width: 161px; */
    width: 273px;
    margin: 120px 0px 0px 0px;
   margin: 0px -45px 5px 0px;
  }
`;

export const TxtsStyled = styled.div`
  @media (max-width: 911px) {
    /* font-size: 12px;
    margin: 55px 7px 6px 17px; */
  }
`;

export const Texttitle = styled.div`
  font-family: Graphik-Bold;
  font-size: 25px;
  font-weight: bold;
  line-height: 0.25;
  text-align: left;
  text-transform: uppercase;
  color: #ffffff;

  @media (max-width: 911px) {
    margin: 0px 0px 0px 0px;
    font-size: 15px;
    padding: 0px 0px 0px 70px;
  }
`;

export const Discription = styled.div`
  @media (max-width: 991px) {
    margin: 0px 35px 0px 19px;
    font-size: 10px;
  }
`;

export const Signature = styled.img`
  @media (max-width: 991px) {
    padding: 14px 14px 0px 17px;
  }
`;

export const SignatureBox = styled.div`
  display: flex;

  @media (max-width: 911px) {
    font-size: 12px;
    padding: 42px 11px 9px 44px;
  }
`;

export const Copyrightfooter = styled.div`
  background-color: transparent;
  padding: 14px 0;
  color: #ffffff;
  text-align: center;
`;

export const Innerwrapper = styled.div`
  background-color: #161515;
`;

export const HorizontalLine = styled.hr`
  color: #ffffff;
`;
