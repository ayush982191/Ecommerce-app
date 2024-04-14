import React, { useState } from 'react'
import { FilterrContextt, useFilterContextt } from '../context/FilterrContext';
import styled from "styled-components"

function FilterSection() {
    const [textvalue,setTextValue] = useState("");
    const [priceBar,setPriceBar] = useState(0);
    const [itemClickIndex,setItemClickIndex] = useState(-1);

    const {updateFilterValue} = useFilterContextt();
    const listItem = ["All","Mobile","Accessories","Watch"];
    // const updateFilterValue= 9
    const handleChange = (e)=>{
        setTextValue(e.target.value);
        updateFilterValue({text:"text",value: e.target.value});
    }
    const handleClick=(value,idx)=>{
        updateFilterValue({text:"category",value: value});
        setItemClickIndex(idx);
        console.log("idx click i s",idx);
    }
    const handleFilter = ()=>{
        setTextValue("");
        updateFilterValue({text:"text",value: ""});
    }
  return (
    <Container>
    <div className='inputBoxWrapper'>
        <input className='inputBox' placeholder='search' type="text" onChange={handleChange} value={textvalue} />
    </div>
    <div className='category'>
        <p className='categoryHeader'>Category</p>
        <ul>
            {/* <li onClick={()=>handleClick("All")} >All</li>
            <li onClick={()=>handleClick("Mobile")} >Mobile</li>
             <li onClick={()=>handleClick("Accessories")} >Accessories</li>
            <li onClick={()=>handleClick("Watch")} >Watch</li> */}
            {
                listItem.map((item,idx)=><li onClick={()=>handleClick(item,idx)} className={idx==itemClickIndex ? "changeColor":""} >{item}</li> )
            }
        </ul>
    </div>
    <div>
        <select name="item" id="">
            <option  value="first">Select</option>
            <option  value="first">Samsung</option>
            <option  value="first">Apple</option>
            <option  value="first">Nokia</option>
        </select>
    </div>
    
    <div>
        <h5>Price</h5>
        <input type="range" min="1" max="60000" value={priceBar} onChange={(e)=>setPriceBar(e.target.value)} id="myRange"/>

    </div>
    <div className='clearFilter' >
        <button onClick={handleFilter} >CLEAR FILTER</button>
    </div>

        
    </Container>
  )
}
// import { FilterrContextt } from '../context/FilterrContext';

export default FilterSection
const Container = styled.div`
.inputBoxWrapper{
    margin-top: 2vh;
    margin-bottom: 2vh;
    display: flex;
    justify-content: center;
    .inputBox{
    padding: 0.5rem;
    width: 15vw;
}
}

.category{
    margin-bottom: 2vh;
    .categoryHeader{
        display: flex;
        justify-content: center;
        /* font: 200; */
        font-size: 16px;
    }
    ul{
        li{
            list-style: none;
            cursor: pointer;
            margin-left: 5px;
            cursor: pointer;
            &:hover{
            color: aliceblue;
            color: #bd6ff5;
             
         }
         

        }
        .changeColor{
            color: #cb28f4;
         }
    }
}
.colorsFilter{
    ul{
        li{
            width: 2vw;
             margin: 2rem;
            border-radius: 100%; 
            border: 2px solid red;
        }
    }
}
.clearFilter{
    display: flex;
    justify-content: center;
   button{
    padding: 1rem;
    cursor: pointer;
    background-color: #d9baf0;
   
    border: none;
    &:hover{
        color: #f3f3f3;
        background-color: #bd6ff5;
    } 
   }
}
    

`