import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';

export const FotterContainer = styled.div``;

export const FottermainContainer = styled.div``;

export const FotterInner = styled.div`
  width: 100%;
`;

export const FotterWrapper = styled.div`
  width: 100%;
  max-width: 1062px;
  margin: 0 auto;
`;

export const FooterROw = styled.div`
  padding: 93px 0 63px;
  border-bottom: 1px solid #6d6d6d;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
  
  @media (max-width: 991px) {
    flex-direction: column;
    padding: 0;
    margin: 0;
    align-items: center;
  }
`;

export const FootRightBox = styled.div`
  flex: 0 0 50%;
  width: 100%;
  max-width: 50%;
  @media (max-width: 991px) {
    max-width: 400px;
  }
`;

export const FootLeftBox = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  font-family: Graphik-Light;
  font-size: 16px;
  font-weight: 300;
  line-height: 2.5;
  text-align: right;
  margin: 50px 0 0 0;
  color: #d5d5d5;
`;

export const FootrLogo = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin: 0 0 15px 0;
`;

export const FooterImage = styled.img`
  max-width: 190px;
  @media (max-width: 991px) {
    padding: 0px 98px;
  }
`;

export const AcceptAgrementBox = styled.div`
  position: relative;
  width: 100%;
  gap: 10px;
  margin: 0px 0px 0px -150px;
  @media (max-width: 991px) {
    margin: 0;
  }
`;

export const InputCheckbox = styled.input`
 margin: 0 22px 0 0;
  align-items: left;
  &::before {
    border: 1px solid #ffffff;
    display: inline-block;
    height: 19px;
    margin: 0;
    padding: 0;
    vertical-align: top;
    width: 20px;
    background: #161515;
  }
`;

export const FooterMAinLink = styled.div``;

export const FooterMenuLink = styled.div``;

export const FooteLinkContainer = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

export const FooterEmailLink = styled.div``;

export const FooterHeadMenu = styled.div`
  font-family: Graphik-Medium;
  font-size: 29px;
  font-weight: 500;
  line-height: 1.83;
  margin: 40px 0 0;
  text-align: left;
  text-transform: capitalize;
  color: #ffffff;
`;

export const LinkPArt = styled.a`
  font-family: Graphik-Light;
  font-size: 18px;
  font-weight: 300;
  line-height: 2;
  text-align: left;
  color: #d5d5d5;
  margin: 0 34px 0 0; 
`;

export const HeadForm = styled.form``;

export const EmailForm = styled.div`
  height: 50px;
  background-color: transparent;
  color: #ffffff;
  position: relative;
  margin: 0;
  border-bottom: 1px solid #ffffff;
`;

export const EmailInput = styled.input`
  font-family: Graphik-Light;
  font-size: 16px;
  font-weight: 300;
  line-height: 2.56;
  text-align: left;
  color: #f1f1f1;
`;

export const SubmitButton = styled.input`
  float: inline-end;
  background: transparent;
  border: 1px solid #ffffff;
  color: #ffffff;
  border-radius: 33px;
  margin: 40px 0px 0px 0px;
  padding: 23px 28px 13px 8px;
  text-transform: uppercase;
  text-align: center;
`;

export const ContactPageIconContainer = styled.div`
  display: inline-block;
  vertical-align: bottom;
`;

export const ContactPageIconinnerContainer = styled.ul`
  display: flex;
`;

export const SocialMediaIcon = styled.li`
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  padding: 0 5px;
`;

export const StyledCopyWriteSection = styled.div`
  width: 100%;
  background-color: transparent;
  padding: 14px 0;

  @media  (max-width: 991px) {
    padding: 45px 0px 0px 0px;
  }
`;

export const StyledCopyWriteWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media  (max-width: 991px) {
    flex-direction: column;
  }
`;
export const StyledCopyWriteTextWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 991px) {
    flex: 0 0;
    max-width: 100%;
    width: auto;
  }
`;

export const StyledCopyWriteText = styled.p`
  font-family: Graphik-Light;
  font-size: 16px;
  font-weight: 300;
  line-height: 2.56;
  text-align: left;
  color: #d5d5d5;

  @media (max-width: 991px) {
    line-height: 1;
    margin: auto;
  }
`;

export const StyledDesignDeveloperText = styled.p`
  font-family: Graphik-Light;
  font-size: 16px;
  font-weight: 300;
  line-height: 2.56;
  text-align: left;
  color: #d5d5d5;

  @media (max-width: 991px) {
    line-height: 1;
  }
`;

export const HeartIcon = styled(FaHeart)`
  color: #ff0000;
  margin: 0 5px 0 0;
  width: 16px;
  height: 16px;
`;

export const StyledFooterContainer = styled.div`
  max-width: 1128px;
  width: 100%;
  margin: 0 auto;
`;
