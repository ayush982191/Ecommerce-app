const productReducer = (state,action)=>{
    // return state;
    if(action.type === "SET_LOADING"){
        return {
            ...state,isLoading:true
        }
    }
    if(action.type === "SET_SINGLE_LOADING"){
        return {
            ...state,isSingleLoading:true
        }
    }
    if(action.type === "API_ERROR"){
        return {
            ...state,
            isLoading : false,
             isError : true
        }
    }
    if(action.type === "SET_SINGLE_API_ERROR"){
        return {
            ...state,
            isSingleLoading : false,
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
    if(action.type === "SET_SINGLE_PRODUCT"){
        // console.log("single  Product iis ",action.payload);
        // console.log("data coming is ",action.payload);
        // console.log("Fiterr is ", action.payload.filter((item)=>item.featured==true));
        return {
            ...state,
            isSingleLoading : false,
            isError : false,
            singleProduct : action.payload,
         
        }
    }
};

export default productReducer
