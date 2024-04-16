import React from 'react'
import { useProductContext } from '../context/ProductContext'
import { useFilterContextt } from '../context/FilterrContext';
import GridView from './GridView';
import ListView from './ListView';

function ProductList() {
  const {products} = useProductContext();
  // console.log("products are ",products);
  // console.log(products);
  const {filter_Products,grid_view}  = useFilterContextt();
  // console.log("filterProduct", filter_Products);
  if(grid_view===true)
  return <GridView products={filter_Products}/>
  else
  return <ListView products={filter_Products}/>

}

export default ProductList
