import React from "react";
import {
  Originalsection,
  Canvastxt,
  Productcontainer,
  Canvasstyle,
  Imagebox,
  Originalsbox,
  Styledtxtoriginal,
  Styledcanvas,
  Productgrid,
  Productgridouter,
  Productgridlist,
  Itembox,
  Productimage,
  Imagelist,
} from "./originals.styled";
import { Cardcontainer } from "./cardproduct";
export function Container() {
  return (
    <>
      <Productcontainer>
        <Originalsbox>
          <Styledtxtoriginal>
            <Styledcanvas>ORIGINALS</Styledcanvas>
            <Canvasstyle>On Canvas</Canvasstyle>
          </Styledtxtoriginal>
        </Originalsbox>
        <Productgrid>
          {/* <Productgridouter>
    <Productgridlist>
<Itembox>
  <Productimage>
<a><Imagelist src = "https://artbyraff.com/wp-content/uploads/2023/06/image00008-768x764.jpeg"></Imagelist>  </a>

  </Productimage>
</Itembox>
    </Productgridlist>
  </Productgridouter> */}

          <Cardcontainer />
        </Productgrid>
        <Originalsection></Originalsection>
        <Imagebox></Imagebox>
      </Productcontainer>
    </>
  );
}
