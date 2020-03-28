import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const IMG = styled.img`
  background: #f2f2f2;
`;

const DIV = styled.div`
  background: transparent;
`;

function CarouselComponent({ setVisibility, images }) {
  let PHOTOS = images.map((item, index) => (
    <DIV key={index}>
      <IMG src={item} height='350px' />
    </DIV>
  ));

  return (
    <Carousel
      showThumbs={false}
      infiniteLoop={true}
      useKeyboardArrows={true}
      showStatus={false}
      onClickItem={() => setVisibility(false)}
    >
      {PHOTOS}
    </Carousel>
  );
}

export default CarouselComponent;
