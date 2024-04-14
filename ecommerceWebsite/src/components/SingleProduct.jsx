// import React, { useEffect, useState } from 'react'
// // import { useProductContext } from '../context/ProductContext';
// import styled from 'styled-components';
// import { FaTruck } from "react-icons/fa";
// import { TbReplace } from "react-icons/tb";
// import { CiCoinInsert } from "react-icons/ci";
// import { FaShieldAlt } from "react-icons/fa";
// import {useParams} from "react-router-dom"
// import {useProductContext} from "../context/ProductContext"

// function SingleProduct() {
//   // const {featureProduct} = useProductContext();
//   const {getSingleProduct} = useProductContext();
//   const {id} = useParams();
//   console.log("id coming is ------------",id);
//   // let url = window.location.href;
//   // const [item,setItem] = useState();
//   // useEffect(()=>{
//     // let array= url.split("/");
//     // let id=array[array.length-1];
 
   
//   // const singleitem = featureProduct.find((item)=>item.id===id)
//   // console.log("item is ",singleitem);
//   // setItem(singleitem);

//   // },[])
//   useEffect(()=>{
//     // const url=`https://api.pujakaitem.com/api/products?id=${id}`
//     // getSingleProduct(url); 
//   })
//   return (
//     <Container>
//       {/* <div className='singlePage' >
//         <div className='imageWrapper' >
//           <img src={item?.image} alt="" />
//         </div>
//         <div className='descriptionWrapper' > 
//           <h2>{item?.category}</h2>
//           <p className='oldPrice' >MRP : {item?.price}</p>
//           <p className='actualPrice'>Deal of the Day : Rs <b>{Math.round(.90*(item?.price))}</b></p>
//           <p>{item?.description}</p>
//           <div className='additionalInfo' >
//             <div>  
//             <FaTruck />
//             <p>Free Delivery</p>             
//             </div>
//             <div>
//             <TbReplace />
//             <p>7 day replacement</p>
//             </div>
//             <div>
//             <CiCoinInsert />
//             <p>Quality Assured</p>
//             </div>
//             <div>
//             <FaShieldAlt />
//             <p>Quality Assured</p>

//             </div>
//           </div>
//           <p>Availablity: <b>in stock</b></p>
//           <p>brand: <b>{item?.company}</b></p>
//         </div>
//       </div> */}

      
//     </Container>
//   )
// }

// export default SingleProduct
// const Container = styled.div`
// margin-top: 10vh;
// .singlePage{
//   display: flex;
//   justify-content: space-around;

//   .imageWrapper{
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     img{
//       width: 30vw;
//     }
//   }
//   .descriptionWrapper{
//     width: 30vw;
//     .oldPrice{
//       text-decoration: line-through;

//     }
//     .actualPrice{
//       color: #c72afb;
//     }
//     .additionalInfo{
//       display: flex;
//       margin-top: 5vh;
//       margin-bottom: 5vh;
//     }

//   }

// }
  

// `


import { FaTruck } from "react-icons/fa";
import { TbReplace } from "react-icons/tb";
import { CiCoinInsert } from "react-icons/ci";
import { FaShieldAlt } from "react-icons/fa";
import styled from "styled-components"
import React, { useEffect, useState } from 'react' 
import {useParams} from "react-router-dom"
import {useProductContext} from "../context/ProductContext"
import PageNavigation from "./PageNavigation";
import Images from "./Images";
import Stars from "./Stars";
import AddToCart from "./AddToCart";

function SingleProduct() {
   const {getSingleProduct,isSingleLoading,singleProduct} = useProductContext();
  const {id} = useParams();   
  useEffect(()=>{
    const url=`https://api.pujakaitem.com/api/products?id=${id}`
    getSingleProduct(url);
    console.log("sing",singleProduct); 
  },[])
  if(isSingleLoading){
    return <><h1>Loading....</h1></>
  }
  return (
        <Container>
          <PageNavigation title={singleProduct.name} />
      <div className='singlePage' >
        <div className='imageWrapper' >
          {/* <img src={singleProduct?.image} alt="" /> */}
          <Images images={singleProduct.image} />
        </div>
        <div className='descriptionWrapper' > 
          <h2>{singleProduct?.category}</h2>
          <Stars starRating={singleProduct?.stars}/>
          <p className='oldPrice' >MRP : {singleProduct?.price}</p>
          <p className='actualPrice'>Deal of the Day : Rs <b>{Math.round(.90*(singleProduct?.price))}</b></p>
          <p>{singleProduct?.description}</p>
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
          <p>brand: <b>{singleProduct?.company}</b></p>
          <hr />
        <AddToCart products = {singleProduct} />
        </div>
        
      </div>
      

      
    </Container>
  )
}

export default SingleProduct
 
 const Container = styled.div`
margin-top: 10vh;
font-size: 10px;
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
