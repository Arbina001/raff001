import React from "react";
import {
  Introductioncontainer,
  Hadecontainer,
  Headingtitle,
  Brushimage,
  Textstylebox,
  Welcomestyle,
  Content,
  Contentbox,
  InnerWrapper,
} from "./art.styled";
export function Artbyraff() {
  return (
    <>
      <Introductioncontainer>
        <InnerWrapper>
          <Textstylebox>
            <Welcomestyle>
              <p>Welcome</p>
            </Welcomestyle>
            <Headingtitle>ART BY RAFF</Headingtitle>
          </Textstylebox>
          <Contentbox>
            <Content>
              <p>
                Welcome to my page. My name is Raffaello Djordevic and I am a
                Viennese artist. I make mostly pop-arts and mixed-media pieces.
              </p>

              <p>
                You can purchase original works as well as prints on my
                homepage. I also take commissions. To commission a piece, just
                contact me via the homepage.
              </p>
            </Content>
          </Contentbox>

          <Hadecontainer></Hadecontainer>
        </InnerWrapper>
      </Introductioncontainer>
    </>
  );
}
