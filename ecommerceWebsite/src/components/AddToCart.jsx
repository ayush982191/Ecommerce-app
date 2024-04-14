import React, { useState } from "react";
import styled from "styled-components";
import CartAmountToggle from "./CartAmountToggle";
import {NavLink} from "react-router-dom"

function AddToCart(products) {
    const [index,setIndex] = useState(-1);
    const [amount,setAmount] = useState(0);
  console.log("produ", products);
  const {stock} = products.products;
  // const {colors,stock,id} = products;
  // console.log(colors);
  // console.log();
  const setDecrease=()=>{
    if(amount>1){
      setAmount(amount-1);
    }
  }
  // console.log("stock is",stock);
  const setIncrease = ()=>{  
    if(amount<stock){
      setAmount(amount+1);
    }

  }
  return (
    <Container>
      <p>Add to Cart</p>
      <div>
        {products?.products.colors?.map((currColor, idx) => {
          return (
            <button onClick={()=>setIndex(idx)} className={`buttonColor ${idx===index ? "chooseColor":""}`} style={{ backgroundColor: currColor }} key={idx}>
            </button>
          );
        })}
      </div>
      <CartAmountToggle amount={amount} 
      setDecrease={setDecrease}
      setIncrease = {setIncrease}
      />
      <NavLink to={'/cart'} ><button className="addToCartBtn">Add to cart</button></NavLink>
    </Container>
  );
}
// start from 23

export default AddToCart;

const Container = styled.div`
  div {
    display: flex;
    gap: .5rem;

    .buttonColor {
      width: 1.5vw;
      height: 1.5vh;
      border-radius: 50px;
      border: none;
      cursor: pointer;
      opacity: 0.4;
      
    }
    .chooseColor{
        opacity: 1 ;
      }
  }
  .addToCartBtn{
    /* background-color: */
    border: none;
    margin-top: 10px;
    padding: 0.4rem;
    background-color: #ecc2fb;
    cursor: pointer;
    &:hover{
      background-color: #de9af7; 
      color: #474747;
    }
  }
`;
