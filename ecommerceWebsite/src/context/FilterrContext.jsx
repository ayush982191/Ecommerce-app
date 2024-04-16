import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../reducer/filterReducer";
const FilterrContextt = createContext();
const initialState = {
    filter_Products : [],
    all_Products : [],
    grid_view : false,
    sorting_value : "Normal",
    filters : {
      text : ""
    } 
}
// const reducer = ()=>{}
  const FilterContextProviderr = ({children}) =>{
    const {products} = useProductContext();
     const [state,dispatch] = useReducer(reducer,initialState);
     // to set the grid view
     const setGridView = ()=>{
        dispatch({type : "SET_GRID_VIEW"})
     }
     const setListView = ()=>{
        dispatch({type : "SET_LIST_VIEW"})
     }
   //   ---------------------------
     const sorting=(e)=>{
      //  console.log("coming inside filterContexr");
      // console.log("sorting",e);

      dispatch({type : "GET_SORT_VALUE",payload :{text : e.target.value,products:state.filter_Products}})
     }
   //   --------------------------------
   const updateFilterValue=(details) =>{
    //  console.log("filterProduct",state.filter_Products);
     dispatch({type : "UPDATE_FILTER_VALUE",payload: {details,products:products,filter_Products:state.filter_Products} })
   }
// ---------------------------- temp check 
     useEffect(()=>{
        dispatch({type : "LOAD_FILTER_PRODUCTS",payload : products})
      },[products])

    return <FilterrContextt.Provider value={{...state,setListView,setGridView,sorting,updateFilterValue}} >
        {children}
    </FilterrContextt.Provider>

}
 const useFilterContextt = () =>{
    return useContext(FilterrContextt)
}
export {FilterrContextt,FilterContextProviderr,useFilterContextt}