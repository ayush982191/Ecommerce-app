import React, { useEffect, useState } from 'react'
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { IoIosStarOutline } from "react-icons/io";

function Stars({starRating}) {
    // console.log(starRating);
    const [num,setNum] = useState(0);
    const [frac,setFrac] = useState(0);
    useEffect(()=>{
        setNum(Math.floor(starRating));
        setFrac(Math.round(starRating/10));
        
    },[])
  return (
    <div>
        {/* <FaRegStar />
        <FaStarHalfStroke />
        <IoIosStarOutline /> */}
        {
            Array.from({num},(v,i)=><FaRegStar/>)
        }
    </div>
  )
}

export default Stars