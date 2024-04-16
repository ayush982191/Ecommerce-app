const cartReducer = (state,action) =>{
    
      if(action.type == "ADD_TO_CART"){
       
        let {amount,id,color,name,prodObj} = action.payload;
         

        console.log("id=",id,"color=",color,"amount",amount,"product",prodObj);
        // console.log("product in cartReducer",product);
        let cartProduct ;
        cartProduct = {
          id : id,
          name : prodObj,
          amount : amount , 
        }
        return {
          ...state, cart : [...state.cart,cartProduct]
        }
        // return {
        //   ...state
        // }
          
      }
      if(action.type == "DELETE_ITEM"){
        let id = action.payload;
        console.log("id in cartReducer is ",id);
        const filterArray = state.cart.filter((item)=>item.name.id!=id);
        return {
          ...state, cart : filterArray
        }

      }


}

export default cartReducer;