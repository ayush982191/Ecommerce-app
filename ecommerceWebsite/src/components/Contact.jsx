import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <Container>
      <div className="heading">Feel Free to Contact us</div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124433.93374997379!2d77.61077252294106!3d12.935949494274936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae110a3e3c57a3%3A0xfae09c066edee239!2sTrinity%20Transit%20House%20PG%20For%20Men%20(Hotel)!5e0!3m2!1sen!2sin!4v1712142245500!5m2!1sen!2sin"
          style={{ width: "85vw", height: "40vh" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="form">
        <form className="contactForm" action="https://formspree.io/f/xoqgkznw" method="post">
          <input
            type="text"
            required
            placeholder="username"
            name="username"
            autoComplete="off"
          />
          <input
            type="text"
            required
            placeholder="email"
            name="email"
            autoComplete="off"
          />
          <textarea
            name="message"
            required
            placeholder="Message"
            cols="30"
            rows="10"
          ></textarea>
          <input className="submitbtn" type="submit" value="send" />
        </form>
      </div>
    </Container>
  );
}

export default Contact;
const Container = styled.div`
  margin-top: 10vh;
  margin-bottom: 20vh;
  /* margin-bottom: 100vh; */
  .heading {
    display: flex;
    justify-content: center;
  }
  .map {
    display: flex;
    justify-content: center;
  }
  .form{
    display: flex;
    align-items: center;
    justify-content: center;
    .contactForm{
    margin-top: 10vh;
    display: flex;
    /* align-items: center;
    justify-content: center; */
    flex-direction: column;
    gap: 1rem;
    width: 40vw;
    border: 2px solid #dbdbdb;
    border-radius: 10px;
    padding: 2rem;
    input{
      padding: 0.4rem;
      text-align: center;
    }
    .submitbtn{
      border: none;
      padding: 1rem;
      border-radius: 5px;
      width: 20vw;
      background-color: #f7e3fd;
      cursor: pointer;

    }

  }
  }
  
`;
