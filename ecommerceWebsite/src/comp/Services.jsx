import React from 'react'
import styled from 'styled-components'
import { MdSecurity } from "react-icons/md";
import { FaTruckArrowRight } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
function Services() {
  return (
    <Container>
      <div className="individualBoxDetail detail-1">
      
        <FaTruckArrowRight />
        <p>Super Fast Delivery </p>
      </div>
      <div className=" detail-2">
        <div className="individualBoxDetail innerDetail-1">
        <MdSecurity />
      <p>Non-Contact Shipping </p>
     
        </div>
        <div className="individualBoxDetail innerDetail-2">
        <GiReceiveMoney />
      <p>Money-back Guarentee </p>
      
        </div>
      </div>
      <div className="individualBoxDetail details-3">
      <RiSecurePaymentLine />
      <p>Super secure payment system </p>
     
      </div>
     </Container>
  )
}

export default Services
const Container = styled.div`
display: flex;
justify-content: space-around; 
.individualBoxDetail{ 
    background-color: #f8f1ff;
    border-radius: 10px;
    padding: 1rem;
    display: flex;
    margin: 0.5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;  
    cursor: pointer;
    transition: 0.5s;

    &:hover{
      background-color: #fcc9ff;
      p{
        font-size: 10px;
      }
    }
}
.detail-1{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}
.detail-2{ 
  display: flex;
  flex-direction: column; 
  align-items: center; 
  /* justify-content: center; */
  .innerDetail-1{
    display: flex;
    align-items: center; 
    gap: 2rem;
  }
  .innerDetail-2{
    display: flex;
    align-items: center;
     gap: 2rem; 
  }
}
.detail-3{ 
  display: flex;
  justify-content: center;
}
`