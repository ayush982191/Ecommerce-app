import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CiGrid2H } from "react-icons/ci";
import { CiViewList } from "react-icons/ci";
import { useFilterContextt } from "../context/FilterrContext";

function ListView({ products=[{id:"",image:"",company:"",name:"",price:"",description:""}] }) {
    let totalPageNo = Math.ceil(products.length/5);
    console.log("total Page no",products.length);
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

      {products.slice((pageNo-1)*5,pageNo*5).map((item) => (
        // <NavLink to={`/singleproduct/${item?.id}`}>
          <div key={item?.id} className="boxWrapper" >
            <div>
              <img className="itemImage" src={item?.image} alt="" />
              <button className="companyLogo">{item?.company}</button>
            </div>
            <div className="prodDetail">
             <div className="priceAndModal">
             <p>{item?.name}</p>
              <p>{item?.price}</p>
             </div>
              <p>{item?.description}...</p>
              <NavLink to={`/singleproduct/${item?.id}`} >
              <button className="KnowMore">Know More</button>
              </NavLink> 
            </div>
           
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
  margin: 2rem;
  padding: 0.5rem;
  border: 2px solid #6c6c6c;
  flex-direction: column;
  justify-content: space-between;
  .itemImage{
    width: 20vw;
  }
}
.priceAndModal{
  display: flex;
  justify-content: space-around;
  width: 40vw;
}
.knowMore{
  /* padding: 5rem; */
  cursor: pointer;
  /* background-color: pink; */
 
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