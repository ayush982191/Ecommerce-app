import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Product({currElem}) {

    // console.log(currElem);
    const {id,name,price,company,image} = currElem;
  return (
    
        <Container>
            <NavLink to={`/singleproduct/${id}`} >
            
                <div >
                <img className='itemImage' src={image} alt="" />
            <button className='companyLogo'  >{company}</button>
                </div>
            <div className='prodDetail' >
                <span>{name}</span>
                <span>{price}</span>
            </div>
            </NavLink>
        </Container>
    
  )
}

export default Product
const Container = styled.div`
text-decoration: none;
color: black;
  position: relative; /* Necessary for absolute positioning */
  .itemImage {
    width: 20vw;
    position: relative; /* Ensure positioning context for absolute positioning */
  }
  .companyLogo {
    position: absolute;
    top: 5px; /* Adjust this value to your preference */
    right: 5px; /* Adjust this value to your preference */
    border-radius: 20px;
    border: none;
    background-color: white; /* Adding background color for better visibility */
    padding: 5px 10px; /* Adding padding for better appearance */
  }
  .prodDetail {
    display: flex;
    justify-content: space-between;
  }
`;
