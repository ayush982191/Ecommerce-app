import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CiGrid2H } from "react-icons/ci";
import { CiViewList } from "react-icons/ci";
import { useFilterContextt } from "../context/FilterrContext";

function ListView({ products=[{id:"",image:"",company:"",name:"",price:"",description:""}] }) {
    let totalPageNo = Math.ceil(products.length/5);
    // console.log("total Page no",products.length);
      const [pageNo,setPageNo] = useState(1);
    const handlePageChange = (pageNoClicked)=>{
      setPageNo(pageNoClicked);
    }
   
  return (
    <Container>
      {/* <div className="views" >
      <CiGrid2H style={{ fontSize: "24px",cursor:"pointer" }} onClick={showListView}  />
      <CiViewList style={{ fontSize: "24px",cursor:"pointer" }} onClick={showGridView} />
      </div> */}

      {products.slice((pageNo-1)*5,pageNo*5).map((item,idx) => (
        // <NavLink to={`/singleproduct/${item?.id}`}>
          <div key={item?.id} className="boxWrapper" >
            <NavLink style={{color:"black",textDecoration:"none"}} to={`/singleproduct/${item?.id}`} >
            <div className="companyDetail" >
              <img className="itemImage" src={item?.image} alt="" />
              <button className="companyLogo">{item?.company}</button>
            </div>
            <div className="prodDetail">
             <div className="priceAndModal">
             <p><b>{item?.name}</b></p>
              <p><b>Rs:{item?.price}</b></p>
             </div>
              <p>{  item?.description.slice(0,150)}...</p>
              
              <button className="KnowMore"  >Know More</button>
               
            </div>
            </NavLink>
           
          </div>
          
       ))}
       <div className="pageBtn" >
        {
          Array.from(Array(totalPageNo)).map((_,idx)=>{
            return <button key={idx}  onClick={()=>handlePageChange(idx+1)}>{idx+1}</button>
          })
        }
       </div>
    </Container>
  );
}

export default ListView; 

const Container = styled.div`
.boxWrapper{
  display: flex;
  gap: 5vw;
  margin: 4rem;
  padding: 1rem;
  border: 2px solid #6c6c6c;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-between;
  .itemImage{
    width: 20vw;
  }
}
.companyDetail{
  display: flex;
  align-items: center;
  justify-content: space-around;
  button{
    padding: 1rem;
    background-color:#fde1e3;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
}
.priceAndModal{
  display: flex;
  justify-content: space-around;
  width: 40vw;
  /* color: black; */
}
 .prodDetail button{
  cursor: pointer;
  background-color: #f3c9ff;
  border: none;
  padding: 0.5rem;
 }
.pageBtn{
  display: flex;
  justify-content: center;
  gap: 5vw;
  margin-top: 5vh;
  button{
    padding: 1rem;
  }
}
  
`;