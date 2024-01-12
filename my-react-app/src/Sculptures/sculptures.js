import {
  HeadingSection,
  LoadMoreButton,
  LoadmoreCOntainer,
  ProductContainer,
  SculptureContainer,
  SculptureSection,
  SculpturesHomeBox,
  SecondDiscription,
  SubTitle,
  ViewButtonInnerCOntainer,
} from "./sculptures.styled";
import { Sculpturecontainer } from "./sculpturescontent"
export function Sculpturesdata() {
  return (
    <>
      <SculptureSection>
        <SculptureContainer>
          <ProductContainer>
            <HeadingSection>
              <SecondDiscription>
                <p>ART BY RAFF</p>
              </SecondDiscription>
              <SubTitle>Sculptures & furniture</SubTitle>
            </HeadingSection>
            <SculpturesHomeBox>
              <Sculpturecontainer />
            </SculpturesHomeBox>
          </ProductContainer>
          <LoadmoreCOntainer>
          <ViewButtonInnerCOntainer>
            <LoadMoreButton>Load more</LoadMoreButton>
          </ViewButtonInnerCOntainer>
        </LoadmoreCOntainer>
        </SculptureContainer>
      </SculptureSection>
    </>
  );
}