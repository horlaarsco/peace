import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const IMG = styled.img`
  background: #f2f2f2;
  height: 90vh;
  width: auto;
`;

const DIV = styled.div`
  height: 80%;
  background: transparent;
`;

const MIMG = styled.img`
  background: #f2f2f2;
  /* height: 90vh; */
  height: 100%;
  width: auto;
`;

const MDIV = styled.div`
  height: 100%;
  background: transparent;
`;

function CarouselComponent({ images }) {
  let PHOTOS = images.map((item, index) => (
    <>
      <DIV id='desktop' key={index}>
        <IMG src={item} />
      </DIV>
      <MDIV id='mobile' key={index}>
        <MIMG src={item} />
      </MDIV>
    </>
  ));
  return (
    <Carousel
      showThumbs={false}
      infiniteLoop={true}
      useKeyboardArrows={true}
      showStatus={false}
    >
      {PHOTOS}
    </Carousel>
  );
}

export default CarouselComponent;
