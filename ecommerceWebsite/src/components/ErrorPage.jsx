import React from 'react'
import styled from "styled-components"
import {NavLink} from "react-router-dom"
function ErrorPage() {
  return (
    <Container>
       
        <h1>404</h1>
        <h3>UH OH! You 're lost</h3>
        <p>The Page You are likely to visit is not available currently</p>
        <button><NavLink to="/" style={{textDecoration:"none",color:"white"}} >Home</NavLink></button>
 


      
    </Container>
  )
}

export default ErrorPage

const Container=styled.div `
height: 60vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #fbf0ff;
button{
  cursor: pointer;
  padding: 0.5rem;
  border: 2px solid black;
  background-color: #bd68f2; 
  border: none;
  border-radius: 5px;
  width: 10vw;

  
}
  

`