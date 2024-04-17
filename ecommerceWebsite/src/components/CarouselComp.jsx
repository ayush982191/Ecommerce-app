import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../public/images/carImg1.jpg";
import img2 from "../../public/images/carImg2.jpg";
import img3 from "../../public/images/carImg3.jpg";
import img4 from "../../public/images/c4.avif";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCarousel = styled(Carousel)`
  width: 60%; /* Adjust the width as needed */
`;

function CarouselComp() {
  return (
    <Container>
      <StyledCarousel showThumbs={false}>
        <div>
          <img src={img1} alt="Carousel Image " />
        </div>
        <div>
          <img src={img2} alt="Carousel Image " />
        </div>
        <div>
          <img src={img3} alt="Carousel Image " />
        </div>
        <div>
          <img src={img4} alt="Carousel Image " />
        </div>
      </StyledCarousel>
    </Container>
  );
}

export default CarouselComp;
