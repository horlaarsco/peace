import React, { useState } from "react";
import styled from "styled-components";
import CarouselComponent from "../components/CarouselComponent";
import CarouselComponentBig from "../components/CarouselComponentBig";

const MODALCONTENT = styled.div`
  background: transparent;
    border: none;
  margin: auto;
  padding: 5px;
  width: 80%;

`;

const DIV = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100%;
`;

const MODAL = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const CLOSE = styled.span`
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
`;

function Carousel({ images }) {
  const [visibility, setVisibility] = useState(true);

  return (
    <div>
      <CarouselComponent images={images} setVisibility={setVisibility} />

      <MODAL
        style={visibility ? { display: "none" } : { display: "block" }}
        id='myModal'
      >
        <DIV>
          <MODALCONTENT>
            <CLOSE onClick={() => setVisibility(true)}>&times;</CLOSE>
            <CarouselComponentBig images={images} />
          </MODALCONTENT>
        </DIV>
      </MODAL>
    </div>
  );
}

export default Carousel;
