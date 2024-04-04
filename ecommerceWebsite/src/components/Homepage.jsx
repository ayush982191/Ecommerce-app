import React, { useState } from 'react'
import HeroSection from '../comp/HeroSection'
import Services from "../comp/Services"
import Trusted from '../comp/Trusted';
function Homepage() {
  const [data,setData] = useState("");
  return (
    <>
    <HeroSection mydata={data} />
    <Services/>
    <Trusted/>
      
    </>
  )
}

export default Homepage