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
  flex-direction: row;
  gap: 2rem;
  align-items: center;
`;

const StyledCarousel = styled(Carousel)`
/* border: 2px solid red; */
  max-width: 40%; /* Adjust the maximum width as needed */
  margin-top: 5vh;
  margin-bottom: 5vh; /* Add margin to create space between the carousel and text */
`;

function CarouselComp() {
  return (
    <Container>
       <div className="aboutEcom">
        <h1>Welcome to Ayush Cart</h1>
        <p>
          Welcome to our e-commerce heaven, where your shopping desires meet convenience. Explore our curated collection of products, meticulously crafted to suit your lifestyle. From fashion essentials to tech gadgets, we have something for everyone. Enjoy seamless browsing and secure transactions. Start your shopping journey with us today
        </p>
      </div>
      <StyledCarousel  infiniteLoop useKeyboardArrows autoPlay>
        <div>
          <img src={img1} alt="Carousel Image 1"  />
        </div>
        <div>
          <img src={img2} alt="Carousel Image 2"  />
        </div>
        <div>
          <img src={img3} alt="Carousel Image 3"  />
        </div>
        <div>
          <img src={img4} alt="Carousel Image 3"  />
        </div>
      </StyledCarousel>
     
    </Container>
  );
}

export default CarouselComp;
