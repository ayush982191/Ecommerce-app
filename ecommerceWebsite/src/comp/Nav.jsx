import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { IoCart } from "react-icons/io5";
import { CgMenu } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
function Nav() {
  const [btnclick,setBtnClick] = useState(false);
  const hamburgerClick=()=>{
    setBtnClick((prev)=>!prev);
    console.log("Clicking on hamburger");
  }
  return (
    <Container>
      <ul className={`lists ${btnclick ? "showListItems":""}  `} >
        <li className="list" > 
          <NavLink to="/">Home</NavLink> 
        </li>
        <li className="list" >
           
          <NavLink to="/about">about</NavLink> 
        </li>
        
        <li className="list" >
           
          <NavLink to="/product">Product</NavLink> 
        </li>
        <li className="list" >
           
          <NavLink to="/contact">Contact</NavLink> 
        </li>
        <li className="list" >
            <NavLink to="/cart" >
                <IoCart />
                <span className="totalItem" >10</span>
                </NavLink>
        </li>

      </ul>
      <div onClick={hamburgerClick} className={`hamburger`}>
      
      {
        !btnclick ? <CgMenu className="navbarBtn" /> :<CgClose className="navbarBtn" />  
      }
      </div>
    </Container>
  );
}

export default Nav;
const Container = styled.div`
    display: flex; 
   .lists{
     display: flex;
    justify-content: space-between;
    width: 70vw; 
    align-items: center;
    .list{
      list-style: none;  
    }


  }
  .hamburger{
    background-color: red;
    display: none;
    cursor: pointer;
  }
  /* .navbarBtn{
    cursor: pointer;
  } */
 
  @media (max-width : 800px) {
    .lists{
      display: none;
    }
    .hamburger{
      display: block;

    }
    .showListItems{
      display: flex;
      flex-direction: column;
       position: relative;
      left: 20vw;
        .list{
        padding: 0.5rem;
      }
    }

    
  }


 

`;
