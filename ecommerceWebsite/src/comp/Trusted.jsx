import React from 'react'
import styled from "styled-components"
// import {img2} from ""

function Trusted() {
  return (
    <Container>
      <div className="description">
      <h3>Trusted by 1000+ Companies</h3>
      </div>
      <div className="brands">
        <div className="brandDetail">
          <img src="./images/img2.png" alt="img" />
        </div>
        <div className="brandDetail">
        <img src="./images/img3.png" alt="img" />
        </div>
        <div className="brandDetail">
        <img src="./images/img4.png" alt="img" />
        </div>
        <div className="brandDetail">
        <img src="./images/img5.png" alt="img" />
        </div>
        <div className="brandDetail">
        <img src="./images/img6.png" alt="img" />
        </div>
      </div>
    </Container>
  )
}

export default Trusted
const Container = styled.div`
background-color: #f8f1ff;
margin-top: 5vh;
padding: 2rem;
  .description{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .brands{
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    .brandDetail{
      cursor: pointer;
      img{
        width: 10vw;
      }
    }
  }

`
