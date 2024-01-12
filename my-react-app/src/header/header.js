import {
  CartContainer,
  HeadLeftLink,
  HeadingImage,
  IconBox,
  MainICon,
  StyledAlignItem,
  StyledHeader,
  Styledlogobox,
  StyledLogoSection,
} from './header.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faOpencart } from '@fortawesome/free-brands-svg-icons';
export function Header() {
  return (
    <>
      <StyledHeader>
        <StyledLogoSection>
          <Styledlogobox>
            <StyledAlignItem>
              <IconBox>
                <FontAwesomeIcon icon={faBars} size="2x" color="#eeefee" />
              </IconBox>
              <HeadLeftLink>
                <MainICon>
                  <HeadingImage src="https://artbyraff.com/wp-content/uploads/2020/06/artbyraff-logo.png"></HeadingImage>
                </MainICon>
              </HeadLeftLink>
              <CartContainer>
                <FontAwesomeIcon icon={faOpencart} size="2x" color="#272727" />
              </CartContainer>
            </StyledAlignItem>
          </Styledlogobox>
        </StyledLogoSection>
      </StyledHeader>
    </>
  );
}
