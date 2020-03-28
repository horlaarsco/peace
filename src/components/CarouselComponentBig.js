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
  background: transparent;
`;

function CarouselComponent({ images }) {
  let PHOTOS = images.map((item, index) => (
    <DIV key={index}>
      <IMG src={item} />
    </DIV>
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
