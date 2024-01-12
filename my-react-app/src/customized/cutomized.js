import React from "react";
import {
  Contentrowbox,
  Contenttxtbox,
  Costomizedbox,
  Costomizedcontainer,
  Headingbox,
  Innerbox,
  Rowfunctionbox,
  Sliderbox,
  Txtcontainer,
} from "./customized.styled";

export function Customizedpage() {
  return (
    <>
      <Costomizedcontainer>
        <Costomizedbox>
          <Innerbox>
            <Headingbox>
              <Txtcontainer>
                <Contenttxtbox>
                  <h1>„ CUSTOMIZED “</h1>
                </Contenttxtbox>
              </Txtcontainer>
            </Headingbox>
            <Sliderbox>
              <Rowfunctionbox></Rowfunctionbox>
            </Sliderbox>
          </Innerbox>
        </Costomizedbox>
      </Costomizedcontainer>
    </>
  );
}
