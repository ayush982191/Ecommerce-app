import React from 'react'
import img from "../../public/images/orderplace.webp"
import { NavLink } from 'react-router-dom'

function Checkout() {
  return (
    <div style={{display:'flex',alignItems:"center",justifyContent:"space-around"}} >
      <div style={{display:"flex",flexDirection:"column",alignItems:"center"}} >
      <h1 style={{fontSize:"16px"}}>Congratulations Your order has been successfully placed.Thank you for shopping with us </h1>
      <NavLink to="/product">
      <button style={{width:"20vw",padding:"1rem",borderRadius:"5px",cursor:"pointer",border:"none",backgroundColor:"#efbdf9",marginTop:"2rem"}}  >Back to Shopping</button>

      </NavLink>
      </div>
      <img src={img} alt="" />
    </div>
  )
}

export default Checkout

// background-color: #efbdf9;
// padding: 1rem;
// border-radius: 5px;
// cursor: pointer;
// border: none;