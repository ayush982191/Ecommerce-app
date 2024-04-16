import React from 'react'
// import {useCartContext} from "../context/CartContext"
import {useCartContext} from "../context/CartContext"
import styled from "styled-components"
import { MdDelete } from "react-icons/md";
import EmptyCart from './EmptyCart';
import { NavLink } from 'react-router-dom';

function Cart() {
  const {cart,deleteCartItem} = useCartContext();
  // const {amount,name} = cart;
  // const {colors,company,id} = name;
  // console.log("cart in cart.js is  ",cart);
  // console.log("amount = ",amount," name ",name," colors=",colors,"company=",company);
  // console.log("amount=",amount);
  // console.log("name ",name);
  console.log(" cart.jsx cart=",cart);
  // const totalAmount =0;
  const totalAmount = cart.reduce((total, item) => {
    const itemPrice = item?.name.price; // 
    const itemAmount = item?.amount || 0; // 
    return total + (itemPrice * itemAmount); // 
  }, 0);
  const deleteItem = (id)=>{
    console.log("deleting id=",id?.name?.id);
    deleteCartItem(id)
  }
  if(cart.length==0){
    return <EmptyCart/>
  } 
  return (
    <Contianer>
      {
         cart.length >0 && cart.map((item,idx)=>(
          <div key={idx} className='cardWrapper'>
           <div className='imgSection' >
           <img src={item?.name?.image[0].url} alt="" />
            <p>{item?.name.description}</p>
           </div>
           <div className='detailSection' >
           <h1>Qty- &nbsp; {item?.amount}</h1>
            <h3>Rs:{item?.name.price}</h3>
            <button onClick={()=>deleteItem(item)} ><MdDelete className='deletebox' /></button>
           </div>
          </div>
        ))
      }
      <div className='checkOut' > 
        <h1>Total =  &#8377;{totalAmount}  </h1>
      </div>
      <div>
        <NavLink to="/product">
        <button className='shopMore'>Shop More</button>
        </NavLink>
      </div>
      
    </Contianer>
  )
}

export default Cart
const Contianer = styled.div`
  .cardWrapper{
    display: flex;
    border: 2px solid black;
    border-radius: 2rem;
    margin: 2rem;
    padding: 4rem;
    .imgSection{
      img{
      width: 20vw;
    }
    }
    .detailSection{
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 2vw;
      button{
      /* background-color: red; */
      border: none;
      .deletebox{
        font-size: 20px;
        cursor: pointer;
        color: gray;
        &:hover{
          color: black;
          
        }
      }
    

    }

    }
  }
  .checkOut{
    display: flex;
    justify-content: end;
    /* .deletebox{
      background-color: red;
    } */
    
  }
  .shopMore{
    background-color: #efbdf9;
    padding: 1rem;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    &:hover{
      background-color: #eca8f9;
      border: 1px solid black;
    
    }
  }

`