import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Homepage from './components/Homepage'
import About from './components/About'
import Products from './components/Products'
import Contact from './components/Contact'
import SingleProduct from './components/SingleProduct'
import Cart from './components/Cart'
import ErrorPage from './components/ErrorPage'
import Header from './comp/Header'
import styled from 'styled-components'
import Footer from './comp/Footer'
import Checkout from './components/Checkout'

function App() {
  return (
    <Container>
      <Router> 
      <Header/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/product' element={<Products/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/singleproduct/:id' element={<SingleProduct/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>} />

        <Route path='*' element={<ErrorPage/>} />
      </Routes>
      <Footer/>
    </Router>
    </Container>
  )
}

export default App
const Container=styled.div` 
  margin-left: 5vw;
  margin-right: 5vw;
`





// Thapa Playlist //