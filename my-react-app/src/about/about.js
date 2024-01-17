import React from "react";
import {
  Aboutsection,
  Leftbox,
  Rightsidebox,
  Imagefuntion,
  Texttitle,
  Discription,
  Signature,
  SignatureBox,
  Copyrightfooter,
  Innerwrapper,
  HorizontalLine,
  Discriptiondetails,
  TxtsStyled
} from "./about.styled";

export function Aboutpage() {
  return (
    <>
      <div>
        <Innerwrapper>
          <Aboutsection>
            <Rightsidebox>
              <Imagefuntion src="https://artbyraff.com/wp-content/uploads/2020/06/aboutImage.png"></Imagefuntion>
            </Rightsidebox>
            <Leftbox>
              <Texttitle>
                <h1>ABOUT ME </h1>
              </Texttitle>
              <Discription>
                <p>
                  I am a self-taught Viennese artist. Since my early childhood,
                  I have been involved in making graphic art. I have
                  experimented with pretty much any material and technique there
                  is. I love to mix a wide variety of materials from sprays,
                  acrylics to chalk, colored pencils and more. Thats are my
                  preferred media because they allow me to work flexibly and
                  intuitively.
                </p>
                <Discriptiondetails> 
                  My style is strongly oriented on form and color. I draw
                  inspiration from everyday life and my surroundings. It is
                  especially important to me that my art is approachable and
                  that it reflects life. I want to draw the viewer in with
                  intriguing combinations of shapes and colors and evoke
                  feelings of joy and pleasure.
                  </Discriptiondetails>
                
              </Discription>
              {/* <TxtsStyled></TxtsStyled> */}
             <SignatureBox>
             <h2>RAFFAELLO DJORDJEVIC</h2>
                <Signature src="https://artbyraff.com/wp-content/uploads/2020/07/logo.png"></Signature>
              </SignatureBox>
            </Leftbox>
          </Aboutsection>
          <HorizontalLine></HorizontalLine>
          <Copyrightfooter>© 2024 ArtbyRaff</Copyrightfooter>
        </Innerwrapper>
      </div>
    </>
  );
}
