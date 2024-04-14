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
      dispatch({type : "GET_SORT_VALUE",payload :{text : e.target.value,products}})
     }
   //   --------------------------------
   const updateFilterValue=(details) =>{
    // console.log("coming ",e); 
    dispatch({type : "UPDATE_FILTER_VALUE",payload: {details,products} })
   }

     useEffect(()=>{
        dispatch({type : "LOAD_FILTER_PRODUCTS",payload : products})
      //   console.log("state,",state);
     },[products])

    return <FilterrContextt.Provider value={{...state,setListView,setGridView,sorting,updateFilterValue}} >
        {children}
    </FilterrContextt.Provider>

}
 const useFilterContextt = () =>{
    return useContext(FilterrContextt)
}
export {FilterrContextt,FilterContextProviderr,useFilterContextt}