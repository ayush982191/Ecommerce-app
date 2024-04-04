import React from "react";
import styled from "styled-components"
function HeroSection() {
  return (
    <Container>
    <div className="aboutEcom">
    <h1>Welcome to Ayush Cart</h1>
      <p>
        Welcome to our e-commerce haven, where your shopping desires meet
        convenience. Explore our curated collection of products, meticulously
        crafted to suit your lifestyle. From fashion essentials to tech gadgets,
        we have something for everyone. Enjoy seamless browsing and secure
        transactions. Start your shopping journey with us today
      </p>
    </div>
    <div className="aboutImg">
      <img src="./images/img7.jpg" alt="" />
    </div>
    </Container>
  );
}

export default HeroSection;
const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10vh;
  margin-top: 10vh;
  .aboutImg{
   
    img{
 width: 30vw;
    height: 40vh;
    }
  }

`