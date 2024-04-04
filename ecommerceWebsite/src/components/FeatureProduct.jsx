import React from 'react'
import styled from "styled-components"
import { useProductContext } from '../context/ProductContext'
import {NavLink} from "react-router-dom"
function FeatureProduct() {
    const {isLoading,featureProduct} = useProductContext();
    // console.log("Featreu is ",featureProduct);
  return (
    <Container>
        <div className='details' >
            <p>Check Now</p>
            <h1>Our Feature Services</h1>
        </div>
        <div className="cards">
            {
                isLoading ? "Loading...." : <>
                {
                    featureProduct.map((item)=>(
                        <NavLink to={`/singleproduct/${item.id}`} key={item.id} style={{textDecoration:"none",color:"black"}} >
                        <div className='card' >
                            <img src={item.image} alt="item.image" />
                            <div className='description' >
                                <p><b>{item.name}</b></p>
                                <p>Rs <b>{item.price}</b></p>
                            </div> 
                        </div>
                        </NavLink>
                    ))
                }
                </>
            }


        </div>
    </Container>
  )
}

export default FeatureProduct
const Container = styled.div`
.cards{
    display: flex;
    gap: 5vw;
    justify-content: space-around;
    .card{
        /* display: flex; */
        img{
            width: 20vw;
        }
        .description{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
    }
}
    
`