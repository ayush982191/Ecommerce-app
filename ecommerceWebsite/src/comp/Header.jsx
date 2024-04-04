import React from 'react'
import styled from "styled-components"
import {NavLink} from "react-router-dom"
import Nav from './Nav'




function Header() {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/logo.png" alt="" />
      </NavLink>
      <Nav/>
    </MainHeader>
  )
}

export default Header
const MainHeader = styled.div`

display: flex;
justify-content: space-between;
align-items: center;
img{
  width: 5vw;
  height: 5vh;
}

`