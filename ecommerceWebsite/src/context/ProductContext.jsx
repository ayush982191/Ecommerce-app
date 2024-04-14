// Contexttttttttttttttttttttttttttttttttt 

import {createContext, useContext, useEffect, useReducer, useState } from "react"
import axios from "axios"



import reducer from "../reducer/productReducer"
const AppContext = createContext(); 
const AppProvider = ({children}) =>{
    const initialState = {
        isLoading : false,
        isError : false,
        products : [],
        featureProduct : [],
        isSingleLoading : false,
        singleProduct : {}
    };
    const [state,dispatch] = useReducer(reducer,initialState)
    const api = "https://api.pujakaitem.com/api/products";
    const fetchProducts = async ()=>{
        dispatch({type : "SET_LOADING"})
        try {
            const resposne = await axios.get(api);
            const product = await resposne.data;
            // setProducts(product);
            // console.log(product);
            dispatch({type:"SET_API_DATA",payload: product})
        } catch (error) {
            dispatch({type : "API_ERROR"})
        }
    }
    // Api for single Product
    const getSingleProduct = async (url)=>{
        // const url = "";
        try {
            dispatch({type : "SET_SINGLE_LOADING"});
            const res=await axios.get(url)
            const singleProduct = await res.data;
            // console.log("single Product in reucer is ",singleProduct);
            dispatch({type :"SET_SINGLE_PRODUCT",payload : singleProduct})
        } catch (error) {
            dispatch({type : "SET_SINGLE_API_ERROR"})
            
        }
    }



    useEffect(()=>{
        fetchProducts();
    },[])
   return (
    <AppContext.Provider value={{...state,getSingleProduct}}>
        {children}
    </AppContext.Provider>
   )
}
 
// Consumer 
// export const userProvider 
const useProductContext = () =>{
    return useContext(AppContext)
}
export {AppProvider,AppContext,useProductContext}