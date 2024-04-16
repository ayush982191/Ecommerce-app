import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { IoCart } from "react-icons/io5";
import { CgMenu } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { useCartContext } from "../context/CartContext";

function Nav() {
  const [btnclick, setBtnClick] = useState(false);
  const {cart} = useCartContext();
  const hamburgerClick = () => {
    setBtnClick(prev => !prev);
  };

  return (
    <Container>
      <ul className={`lists ${btnclick ? "showListItems" : ""}`}>
        <li className="list"> 
          <NavLink to="/">Home</NavLink> 
        </li>
        <li className="list">
          <NavLink to="/about">About</NavLink> 
        </li>
        <li className="list">
          <NavLink to="/product">Product</NavLink> 
        </li>
        <li className="list">
          <NavLink to="/contact">Contact</NavLink> 
        </li>
        <li className="list">
          <NavLink to="/cart">
            <IoCart />
            <span className="totalItem">{cart.length}</span>
          </NavLink>
        </li>
      </ul>
      <div onClick={hamburgerClick} className="hamburger">
        {btnclick ? <CgClose className="navbarBtn" /> : <CgMenu className="navbarBtn" />}
        <ul className={`showListItems ${btnclick ? "show" : ""}`}>
          <li><NavLink to="/" className="linkItems">Home</NavLink></li>
          <li><NavLink to="/about" className="linkItems">About</NavLink></li>
          <li><NavLink to="/product" className="linkItems">Product</NavLink></li>
          <li><NavLink to="/contact" className="linkItems">Contact</NavLink></li>
          <li><NavLink to="/cart" className="linkItems cartClass"><IoCart /><span className="totalItem">{cart.length}</span></NavLink></li>
        </ul>
      </div>
    </Container>
  );
}

export default Nav;

const Container = styled.div`
  display: flex; 
  .lists {
    display: flex;
    justify-content: space-between;
    width: 70vw; 
    align-items: center;
    .list {
      list-style: none;  
    }
  }
  .hamburger {
    /* background-color: red; */
    display: none;
    cursor: pointer;
    right: 5vw;
    position: relative;
  }
  .showListItems {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    /* background-color: #ffffff; */
    padding: 10px;
    /* border: 1px solid #cccccc; */
    z-index: 1;
    /* padding: 1rem; */
    border: 2px solid black;
    width: 10vw;
    background-color: #f9f0f8;
    border-radius: 5px;
  }
  .linkItems {
    color: black; /* Set text color to black */
    text-decoration: none; /* Remove default underline */
    /* margin: 1rem; */
    &:hover{
      color: #4d4d4d;
      border-radius: 2px;
      padding: 0.2rem;
      background-color: #ffc0fa;
      /* margin-top: 5px; */
    }
  }
  .cartClass{
    /* display: flex; */
    /* gap: 1rem; */
    /* font-size: 5px; */
  }

  @media (max-width: 800px) {
    .lists {
      display: none;
    }
    .hamburger {
      display: block;
    }
    .showListItems.show {
      display: flex;
      li {
        list-style: none;
       
      }
    }
  }
`;
