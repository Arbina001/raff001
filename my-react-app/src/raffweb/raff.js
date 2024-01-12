import React from "react";
import {
  MainSection,
  Leftbox,
  Rightbox,
  Cartbox,
  HeadLeftLink,
  HeadingImage,
  IconBox,
  MainICon,
  StyledAlignItem,
  StyledHeader,
  StyledLogoContainer,
  StyledLogoSection,
} from "./raff.styled";

export function MainContainer() {
  return (
    <>
      <MainSection></MainSection>

      <Leftbox></Leftbox>

      <Rightbox></Rightbox>

      <StyledHeader>
        <StyledLogoSection>
          <StyledLogoContainer>
            <StyledAlignItem>
              <IconBox>navigation</IconBox>

              <HeadLeftLink>
                <MainICon>
                  <HeadingImage src="https://artbyraff.com/wp-content/uploads/2020/06/artbyraff-logo.png"></HeadingImage>
                </MainICon>
              </HeadLeftLink>
              <Cartbox>cart</Cartbox>
            </StyledAlignItem>
          </StyledLogoContainer>
        </StyledLogoSection>
      </StyledHeader>
    </>
  );
}
