import React from 'react';
import { Link } from 'react-router-dom';
import {
  AnchorButton,
  Bannerwrapper,
  ButoonContainer,
  Drageblehome,
  Homepagesection,
  Homeslider,
  Mainbox,
} from './banner.styled';
import { Artbyraff } from '../art/art';
import { Container } from '../originals/originals';
import { Sculpturesdata } from '../Sculptures/sculptures';
// import { Scruptures } from "../scrupture/scrupture";

export function Banerpage() {
  return (
    <>
      <Mainbox>
        <Bannerwrapper>
          <ButoonContainer>
            <Link to="/about" target="_self">
              <AnchorButton>About</AnchorButton>
            </Link>
          </ButoonContainer>
          <Homepagesection>
            <Homeslider>
              <Drageblehome></Drageblehome>
            </Homeslider>
          </Homepagesection>
        </Bannerwrapper>
      </Mainbox>
      <Artbyraff />
      <Container />
      <Sculpturesdata />
    </>
  );
}
