const productReducer = (state,action)=>{
    // return state;
    if(action.type === "SET_LOADING"){
        return {
            ...state,isLoading:true
        }
    }
    if(action.type === "API_ERROR"){
        return {
            ...state,
            isLoading : false,
             isError : true
        }
    }
    if(action.type === "SET_API_DATA"){
        // console.log("data coming is ",action.payload);
        // console.log("Fiterr is ", action.payload.filter((item)=>item.featured==true));
        return {
            ...state,
            isLoading : false,
            isError : false,
            products : action.payload,
            featureProduct : action.payload.filter((item)=>item.featured==true)
        
        }
    }
};

export default productReducer
