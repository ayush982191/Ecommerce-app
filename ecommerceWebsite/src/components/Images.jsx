import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { useProductContext } from '../context/ProductContext';

function Images({images=[]}) {
    const [singleImage,setSingleImage] = useState();
    const {isSingleLoading} = useProductContext();

    const showImage = (url)=>{
        setSingleImage(url);
    }

    if(isSingleLoading){
        // console.log(isSingleLoading);
        return (
            <>
             <h1>Loading....</h1>
             </>
        )
        }
        useEffect(()=>{
            // console.log("check ",isSingleLoading);
            if(!isSingleLoading && images.length>0){
                setSingleImage(images[0].url);
            }

        },[isSingleLoading])
  return (
    <Container>
        <div className='allImages' >
        {
            images.map((item,idx)=>(
                <img key={idx} style={{width:"10vw"}} onClick={()=>showImage(item.url)} src={item.url} alt="" />
            ))
        }
        </div>
        <div className='singleImage'>
         <img src={singleImage} alt="" />

        </div>
    </Container>
  )
}

export default Images
const Container = styled.div`
display: flex;
align-items: center;
 .allImages{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-right: 1vw;
     
 }
 .singleImage{
    
 }
    

`