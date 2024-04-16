import React from "react";
import img1 from "/images/himg.jpeg";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
 function About() {
  return (
    <Container>
      <h1>
        Welcome to [Your Ecommerce Website Name], your ultimate destination for
        all your shopping needs. Discover a vast selection of high-quality
        products ranging from fashion, electronics, home essentials, beauty, and
        more, all at competitive prices. Whether you're searching for the latest
        trends in fashion or essential gadgets for your everyday life, we've got
        you covered. With our user-friendly interface and secure payment
        options, shopping has never been easier. Explore our curated
        collections, enjoy hassle-free checkout, and experience exceptional
        customer service every step of the way. Join our community of satisfied
        customers and embark on a seamless shopping journey with us today!
      </h1>
      <div className="journey">
        <div>
          <h1>My Journey</h1>
          <ul>
            <li>
              {" "}
              Embarking on a Visionary Path: At the heart of our story lies a
              visionary beginning, where inspiration ignited the journey towards
              our goals.
            </li>

            <li>
              {" "}
              Overcoming Obstacles, Embracing Growth: Along the path, we
              encountered challenges that became stepping stones for growth,
              fostering resilience and learning at every turn.
            </li>

            <li>
              {" "}
              Celebrating Milestones: Each milestone achieved is a testament to
              our dedication, marking significant moments in our journey of
              progress and success.
            </li>

            <li>
              {" "}
              Navigating Change with Grace: Adaptability became our ally as we
              navigated through ever-changing landscapes, embracing flexibility
              and innovation to thrive amidst change.
            </li>

            <li>
              {" "}
              A Community of Support and Encouragement: Surrounded by a
              supportive network of family, friends, mentors, and partners, we
              found strength in unity and encouragement in every step.
            </li>

            <li>
              {" "}
              Fueled by Passion, Driven by Purpose: Our journey is fueled by
              unwavering passion and purpose, propelling us forward with
              determination and conviction towards our shared vision.
            </li>

            <li>
              {" "}
              Resilience in the Face of Adversity: Despite challenges and
              setbacks, our resilience shines through, empowering us to rise
              above obstacles and emerge stronger than before.
            </li>

            <li>
              {" "}
              Discovering Strengths, Embracing Opportunities: Our journey of
              self-discovery has led us to uncover our unique strengths, while
              also embracing new opportunities for growth and exploration.
            </li>

            <li>
              {" "}
              A Story of Continual Evolution: Our journey is an ongoing
              narrative of evolution, where we remain open to new experiences,
              insights, and possibilities, ever committed to our pursuit of
              excellence.
            </li>

            <li>
              {" "}
              Inviting You to Join the Adventure: As we continue on this
              exhilarating journey, we invite you to join us, to be part of our
              story, and to share in the excitement of what lies ahead.
              Together, let's embark on an unforgettable adventure towards a
              brighter future.
            </li>
          </ul>
        </div>
        <div>
          <img src={img1} alt="" />
        </div>
      </div>
      <div className="HomeWrapper" >
      <NavLink to="/" ><button className="HomeBtn">Back to home</button></NavLink>
      </div>
      
    </Container>
  );
}

export default About;
const Container = styled.div`
  .journey {
   
    margin-top: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    h1{
      display: flex;
      justify-content: center;
      
    }
  }
  .HomeWrapper{
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    .HomeBtn{
    background-color: #edc9f7;
    padding: 1rem;
    cursor: pointer;
    border: none;
    &:hover{
      background-color: #efb6ff;
      border: 1px solid black;
      border-radius: 5px;
    }
  }
  }
  
`;
