import styled from 'styled-components';
export const StyledHeader = styled.header`
  position: relative;
`;

export const StyledLogoSection = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
`;

export const Styledlogobox = styled.nav`
  width: 100%;
  max-width: 1128px;
  padding: 0 15px;
  margin: 0 auto;

  @media (max-width: 991px) {
    padding: 0;
    margin: 0;
  }
`;

export const StyledContainerObject = styled.div`
  width: 100%;
  max-width: 1128px;
`;

export const StyledAlignItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 0 15px;
  color: #ffffff;

  @media (max-width: 991px) and (max-width: 991px) {
    margin: 0;
  }
`;

export const HeadLeftLink = styled.div`
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
`;

export const IconBox = styled.div`
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #ffffff;
`;

export const MainICon = styled.div`
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
`;

export const HeadingImage = styled.img`
  width: 100%;
  max-width: 240px;

  @media (max-width: 911px) {
    max-width: 150px;
    padding: 19px 5px 0px 9px;
  }
`;

export const CartContainer = styled.div`
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
`;
