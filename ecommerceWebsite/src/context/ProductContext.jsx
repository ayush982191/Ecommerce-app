// Contexttttttttttttttttttttttttttttttttt 

import {createContext, useContext, useEffect, useReducer, useState } from "react"
import axios from "axios"



import reducer from "../reducer/productReducer"
// context 
const AppContext = createContext(); 
// Provider
const AppProvider = ({children}) =>{
    // const [products,setProducts] = useState();
    const initialState = {
        isLoading : false,
        isError : false,
        products : [],
        featureProduct : []
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
    useEffect(()=>{
        fetchProducts();
    },[])
   return (
    <AppContext.Provider value={{...state}}>
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