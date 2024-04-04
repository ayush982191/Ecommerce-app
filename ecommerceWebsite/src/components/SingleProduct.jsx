import React, { useEffect, useState } from 'react'
import { useProductContext } from '../context/ProductContext';
import styled from 'styled-components';
import { FaTruck } from "react-icons/fa";
import { TbReplace } from "react-icons/tb";
import { CiCoinInsert } from "react-icons/ci";
import { FaShieldAlt } from "react-icons/fa";

function SingleProduct() {
  const {featureProduct} = useProductContext();
  let url = window.location.href;
  const [item,setItem] = useState();
  useEffect(()=>{
    let array= url.split("/");
    let id=array[array.length-1];
 
   
  const singleitem = featureProduct.find((item)=>item.id===id)
  console.log("item is ",singleitem);
  setItem(singleitem);

  },[])
  return (
    <Container>
      <div className='singlePage' >
        <div className='imageWrapper' >
          <img src={item?.image} alt="" />
        </div>
        <div className='descriptionWrapper' > 
          <h2>{item?.category}</h2>
          <p className='oldPrice' >MRP : {item?.price}</p>
          <p className='actualPrice'>Deal of the Day : Rs <b>{Math.round(.90*(item?.price))}</b></p>
          <p>{item?.description}</p>
          <div className='additionalInfo' >
            <div>  
            <FaTruck />
            <p>Free Delivery</p>             
            </div>
            <div>
            <TbReplace />
            <p>7 day replacement</p>
            </div>
            <div>
            <CiCoinInsert />
            <p>Quality Assured</p>
            </div>
            <div>
            <FaShieldAlt />
            <p>Quality Assured</p>

            </div>
          </div>
          <p>Availablity: <b>in stock</b></p>
          <p>brand: <b>{item?.company}</b></p>
        </div>
      </div>

      
    </Container>
  )
}

export default SingleProduct
const Container = styled.div`
margin-top: 10vh;
.singlePage{
  display: flex;
  justify-content: space-around;

  .imageWrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      width: 30vw;
    }
  }
  .descriptionWrapper{
    width: 30vw;
    .oldPrice{
      text-decoration: line-through;

    }
    .actualPrice{
      color: #c72afb;
    }
    .additionalInfo{
      display: flex;
      margin-top: 5vh;
      margin-bottom: 5vh;
    }

  }

}
  

`