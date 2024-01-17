import {
  Headingwrapper,
  Loadmorebutton,
  Loadmorewrapper,
  ProductContainer,
  SculptureContainer,
  SculptureSection,
  SculpturesHomeBox,
  Content,
  SubTitle,
  Buttoninnerwrapper,
} from './sculptures.styled';
import { Sculpturecontainer } from './sculpturescontent';
export function Sculpturesdata() {
  return (
    <>
      <SculptureSection>
        <SculptureContainer>
          <ProductContainer>
            <Headingwrapper>
              <Content>
                <p>ART BY RAFF</p>
              </Content>
              <SubTitle>Sculptures & furniture</SubTitle>
            </Headingwrapper>
            <SculpturesHomeBox>
              <Sculpturecontainer />
            </SculpturesHomeBox>
          </ProductContainer>
          <Loadmorewrapper>
            <Buttoninnerwrapper>
              <Loadmorebutton>Load more</Loadmorebutton>
            </Buttoninnerwrapper>
          </Loadmorewrapper>
        </SculptureContainer>
      </SculptureSection>
    </>
  );
}
