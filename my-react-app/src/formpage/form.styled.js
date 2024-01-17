import styled from 'styled-components';

export const ContactPAgeSection = styled.section``;

export const InnerContactPage = styled.div`
  background: url(https://artbyraff.com/wp-content/themes/storefront-child-theme-master/assets/images/bgContactform.jpg);
  min-height: 1100px;
  height: 100%;
  background-position: center center;
  background-size: 100% auto;
`;

export const InnerContainerPage = styled.div``;

export const ContactWrapper = styled.div`
  width: 100%;
  max-width: 1128px;
  padding: 0 15px;
  margin: 0 auto;

  @media (max-width: 991px) {
    padding: 0;
  }
`;

export const InnerContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 -15px;
  padding: 0px 126px 0px;

  @media (max-width: 991px) {
    padding: 0px 15px 0px;
    margin: 0;
  }
`;

export const ContactTitle = styled.div`
  font-family: Graphik-Black;
  font-size: 72px;
  font-weight: 900;
  line-height: 0.54;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  top: 100px;
  color: #1c1b1c;

  @media (max-width: 991px) {
    top: 77px;
    font-size: 48px;
  }
`;

export const Subtitle = styled.div`
  font-family: Graphik-Black;
  font-size: 48px;
  font-weight: 900;
  line-height: 1.71;
  text-align: center;
  text-transform: uppercase;
  z-index: 1;
  color: #e8e3e8;
  letter-spacing: 6px;

  @media (max-width: 991px) {
    font-size: 27px;
    font-weight: 900;
    line-height: 31px;
  }
`;

export const ContactFormPage = styled.div`
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0 -15px 0 -15px;

  @media (max-width: 991px) {
    margin: 0;
  }
`;

export const ContactFormData = styled.div`
  max-width: 990px;
  margin: 0 auto;
`;

export const ContactFormWrapper = styled.p`
  font-family: Graphik-Light;
  font-size: 24px;
  font-weight: 300;
  line-height: 1.5;
  text-align: center;
  color: #a2a2a2;
  margin: 30px 0 70px;

  @media (max-width: 991px) {
    font-size: 13px;
  }
`;

export const FormDetailsPage = styled.p`
  margin: 0px 0px 0px 0px;
`;

export const ContactTextPage = styled.span`
  font-family: Graphik, sans-serif;
  font-size: 26px;
  line-height: 2.5;
  text-align: center;
  color: #e8e3e8;
  margin: 0 7px;

  @media (max-width: 991px) {
    font-size: 15px;
  }
`;

export const InputSection = styled.input`
  background: transparent;
  padding: 0;
  border: none;
  border-bottom: 1px solid #d8cf91;
  position: relative;
  bottom: 21px;
  font-size: 20px;
  line-height: 1.8;
  text-align: center;
  text-transform: uppercase;
  color: #979797;
  margin:  35px 0 0 0;
  &:focus {
    outline: none;
    border-bottom: 2px solid #d8cf91;
  }
`;

export const NameInput = styled(InputSection)`
  width: 100%;
  max-width: 500px;

  @media (max-width: 991px) {
    max-width: 300px;
  }
`;

export const TellephoneInput = styled(InputSection)`
  width: 100%;
  max-width: 294px;
`;

export const EmailInput = styled(InputSection)`
  width: 100%;
  max-width: 336px;
  text-align: left;
  border: transparent;
  &:focus {
    outline: none;
  }

  @media (max-width: 991px) {
    max-width: 289px;
  }
`;

export const ExtraInformation = styled(InputSection)`
  width: 100%;
  max-width: 837px;
  text-align: left;

  @media (max-width: 991px) {
    max-width: 336px;
  }
`;

export const SendEMail = styled.input`
  padding: 0;
  border: none;
  background-image: url(https://artbyraff.com/wp-content/themes/storefront-child-theme-master/assets/images/newsletter-aero.svg);
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  width: 30px;
  height: 50px;
  background-color: transparent;
`;
