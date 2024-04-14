import React, { useEffect } from "react";
import { useFilterContextt } from "../context/FilterrContext";
import styled from "styled-components";

import { CiGrid2H } from "react-icons/ci";
import { CiViewList } from "react-icons/ci";
function Sort() {
  const {sorting, setGridView, setListView } = useFilterContextt();
  const showListView = () => {
    setGridView(false);
  };
  const showGridView = () => {
    setListView(true);
  };
 const handleClick = (e)=>{
  console.log(e.target.value);

 }

//  useEffect(()=>{

//  },[sorting])


  return (
    <Container>
      <div className="wrapper">
        <div className="views">
          <CiGrid2H
            style={{ fontSize: "24px", cursor: "pointer" }}
            onClick={showListView}
          />
          <CiViewList
            style={{ fontSize: "24px", cursor: "pointer" }}
            onClick={showGridView}
          />
        </div>
        <div className="filterResult">
          <form onClick={sorting}>
            <select  className="selectItem" name="" id="">
              <option value="#">Filter Product</option>
              <option className="options" value="low_to_high">low to high</option>
              <option className="options" value="high_to_low">hight to low</option>
            </select>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default Sort;
const Container = styled.div`
.wrapper{
  display: flex;
  justify-content: space-between;
  /* border-radius: 10px; */
}
.selectItem{
  padding: 1rem;
  font-size: 12px;
  
}
  .views {
    margin-left: 5vw;
    margin-bottom: 5vh;
    display: flex;
    gap: 5vw;
  
    /* font-size: 20px; */
  }
  .filterResult{
    options{
      padding: 1rem;

    }
    
  }
`;
