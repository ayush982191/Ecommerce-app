import React from 'react'
import styled from "styled-components"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FilterSection from './FilterSection';
import ProductList from './ProductList';
import Sort from './Sort';
 
function Products() {
  return (
    <Container>
    <Box>
      <Grid container spacing={2}>
        <Grid item  xs={3} >
          
            <div className='item1'>
              {/* hello */}
              <FilterSection/>
            </div>
          
        </Grid>
        <Grid item  xs={9} >
          
            <div className='item2'>
              <Sort/>
              <ProductList/>
            </div>
          
        </Grid>

      </Grid>
    </Box>
      
    </Container>
  )
}

export default Products
const Container = styled.div`
.item1{
  /* background-color: red; */
  /* padding: 2rem; */
  margin-top: 5vh;
  height: 50vh;
  border: 2px solid #949494;
  padding: 1rem;
  border-radius: 15px;


}
.item2{
  /* background-color: green; */
}

`