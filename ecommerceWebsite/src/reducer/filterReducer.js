const filterReducer =(state,action)=> {


    if(action.type == "LOAD_FILTER_PRODUCTS"){
        // console.log("coming inside load filter");
        return {
            ...state,
            filter_Products : [...action?.payload],
            all_Products : [...action?.payload]
        }
    }



    if(action.type==="SET_GRID_VIEW"){
        return {
            ...state,
            grid_view : true

        }
    }
    if(action.type==="SET_LIST_VIEW"){
        return {
            ...state,
            grid_view : false
 
        }
    }
    if(action.type == "GET_SORT_VALUE"){
        // const initialState = [...state];
        const {text , products} = action.payload;
        // console.log("coming in GET_SORT_VALUE  filter Reducer");
        let newSortData;
        let tempSortData = [...products];
        if(text == "low_to_high"){
            newSortData =tempSortData.sort((a,b)=>a?.price-b?.price)
        }else if(text == "high_to_low"){
             newSortData =tempSortData.sort((a,b)=>b?.price-a?.price)
        }else{
             return {
                ...state
            }
        }
        return {
            ...state,
            filter_Products : newSortData,
            sorting_value : action.payload

        }
    }
    // if(action.type=="UPDATE_FILTER_VALUE"){
    //     const {name,value}  =action.payload;
    //     console.log("value ");
    //     return {
    //         ...state
    //     }
    // }
    if(action.type == "UPDATE_FILTER_VALUE"){
        const {details,products} = action.payload;
        const {text,value}=details;
        let filterArray =[];
        console.log(products);
        console.log("text =",text,"value",value);

        // console.log("Value coming is ",e);
        if(text==="text"){
            filterArray = products.filter((item)=>item?.name.toLowerCase().includes(value.toLowerCase()));
            
        }else if(text==="category"){
            // console.log("category, value=",value);
            if(value.toLowerCase()=="all"){
                return {
                    ...state,
                    filter_Products : products
                }
            }
            filterArray = products.filter((item)=>item?.category.toLowerCase()==value.toLowerCase());
             
        }else if(text=="company"){
            if(value.toLowerCase()=="all"){
                return {
                    ...state,
                    filter_Products : products
                }
            }
            filterArray=products.filter((item)=>item?.company.toLowerCase()==value.toLowerCase());
        }
        return {
            ...state,
            filter_Products : filterArray
        }
              
    }


}
export default filterReducer;

