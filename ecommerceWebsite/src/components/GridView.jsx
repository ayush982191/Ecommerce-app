import React, { useState } from 'react'
import styled from "styled-components"

import Product from './Product'
import { useFilterContextt } from '../context/FilterrContext';

function GridView({products=[{id:0}]}) {
  const [pageLength,setPageLength] = useState(Math.ceil(products.length/6));
  const [startPage,setStartPage] = useState(1);
// console.log("page length is ",pageLength);
  const handlePageChange = (pageNo)=>{
    setStartPage(pageNo);
  }
  return (
    <Container>
        
       <div className='productWrapper'>
       {
            products.slice((startPage-1)*6,startPage*6).map((item,id)=>{
                return <Product key={item.id} currElem={item} />
            })
        }
        
       
       </div>
       <div className='pageBtn' >
       {
          Array.from(Array(pageLength)).map((_,idx)=>{
            return <button key={idx} onClick={()=>handlePageChange(idx+1)} >{idx+1}</button>
          })
        }
          
        </div>
    </Container>
  )
}

export default GridView
const Container =styled.div`

.productWrapper{
  display: flex;
flex-wrap: wrap;
gap: 2rem;
justify-content: space-around;
}
.pageBtn{
  display: flex;
  justify-content: center;
  gap: 5vw;
  margin-top: 5vh;
  button{
    padding: 1rem;
  }
}
    
`