import React, { useContext, useState } from 'react'
import HeroSection from '../comp/HeroSection'
import Services from "../comp/Services"
import Trusted from '../comp/Trusted';
import { useProductContext } from '../context/ProductContext';
import FeatureProduct from './FeatureProduct';
// import { AppContext, AppProvider } from '../context/ProductContext';
function Homepage() {
  const [data,setData] = useState(""); 
  const name = useProductContext();
  return (
    <>  
    <HeroSection mydata={data} />
    <Services/>
    <Trusted/>
    <FeatureProduct/>
      
    </>
  )
}

export default Homepage