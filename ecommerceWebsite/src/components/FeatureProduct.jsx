import React from 'react';
import styled from "styled-components";
import { useProductContext } from '../context/ProductContext';
import { NavLink } from "react-router-dom";

function FeatureProduct() {
    const { isLoading, featureProduct } = useProductContext();

    return (
        <Container>
            <div className='details'>
                <p>Check Now</p>
                <h1>Our Feature Services</h1>
            </div>
            <div className="cards">
                {
                    isLoading ? "Loading...." : (
                        featureProduct.map((item) => (
                            <NavLink to={`/singleproduct/${item.id}`} key={item.id} style={{ textDecoration: "none", color: "black" }}>
                                <div className='card'>
                                    <img src={item.image} alt={item.image} />
                                    <div className='description'>
                                        <p><b>{item.name}</b></p>
                                        <p>Rs <b>{item.price}</b></p>
                                    </div>
                                </div>
                            </NavLink>
                        ))
                    )
                }
            </div>
            <div className="loadMoreWrapper">
                <NavLink to='/product'>
                    <button className='loadMoreBtn'>Load More</button>
                </NavLink>
            </div>
        </Container>
    );
}

export default FeatureProduct;

const Container = styled.div`
    .cards {
        display: flex;
        gap: 5vw;
        justify-content: space-around;

        .card {
            width: 20vw;
            transition: width 0.5s; /* Add transition property here */

            &:hover {
                width: 22vw;
            }

            img {
                width: 100%;
            }

            .description {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
            }
        }
    }

    .loadMoreWrapper {
        display: flex;
        justify-content: center;

        .loadMoreBtn {
            margin-top: 5vh;
            width: 20vw;
            height: 6vh;
            background-color: #e0b5e0;
            border: none;
            border-radius: 5px;
            cursor: pointer;

            &:hover {
                background-color: #e079e0;
                color: #e3e3e3;
            }
        }
    }
`;
