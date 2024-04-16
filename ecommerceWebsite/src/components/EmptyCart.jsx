import React from 'react'
import img from "../../public/images/simg3.png"
import styled from 'styled-components'

function EmptyCart() {
  return (
    <Container>
        <h1>OOps, Your Cart is Empty</h1>
        <div className='Image' > 
        <div className="">
        <img src={img} alt="" />
        <h4>Please do not Look into my eyes, we are not family members</h4>
        </div>
        </div>
    </Container>
  )
}

export default EmptyCart
const Container = styled.div`
 h1{
        font-size: 20px;
    }
.Image{
    display: flex;
    justify-content: center;

    height: 80vh;
   
}

`