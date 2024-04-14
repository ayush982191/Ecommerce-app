import React from 'react'
import styled from "styled-components"

function CartAmountToggle({amount,setDecrease,setIncrease}) {
  return (
    <Container>
        <button className='toggleClass'  onClick={()=>setDecrease()} >-</button>
        <button className=' qtyClass' >{amount}</button>
        <button className='toggleClass'  onClick={()=>setIncrease()} >+</button>
    </Container>
  )
}

export default CartAmountToggle
const Container = styled.div`
    .toggleClass{
        width: 3vw;
        height: 3vh;
        font-size: 1rem;
        border: none;
        background-color:  #fde1e3;
        margin-top: 1rem;
        cursor: pointer;
        &:active{
            color: #7d7d7d;
        }
    }
    .qtyClass{
        width: 5vw;
        height: 3vh;
        font-size: 1rem;
        border: none;
        background-color:  #fde1e3;
        margin-top: 1rem;

    }
`