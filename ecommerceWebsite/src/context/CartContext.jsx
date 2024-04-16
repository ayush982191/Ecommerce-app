

import { createContext, useContext, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../reducer/cartReducer";



const cartContext = createContext();
const initialState = {
    cart : [],
    totalItem : 0,
    totalAmount : 0,
    shippingFee : 5000

}


const CartContextProvider = ({children})=>{
     const [state,dispatch] = useReducer(reducer,initialState);



    const addToCart = (amount,id,color,name,prodObj)=>{
        dispatch({type : "ADD_TO_CART",payload : {id,color,amount,prodObj}})
    }
    const deleteCartItem=(id)=>{
        console.log("coming in cartContext, id=",id);
        dispatch({type : "DELETE_ITEM",payload : id.name.id});
    }



    return <cartContext.Provider value={{...state,addToCart,deleteCartItem}} >
        {children}
    </cartContext.Provider>  
}


const useCartContext = ()=>{
    return useContext(cartContext);
}
export {CartContextProvider,useCartContext}