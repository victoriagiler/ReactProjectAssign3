import React from 'react'
import { Container } from 'react-bootstrap'
import HomeScreen from './Screens/HomeScreen'
import EventScreen from './Screens/EventScreen';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import CartScreen from './Screens/CartScreen';

function App() {
  return (
    <>
    <Router>
     <Header/>
      <main>
      <Container>  
        <Routes>
        <Route path="/" element={<HomeScreen />} exact />
        <Route path="/event/:id" element={<EventScreen/>}/>
        <Route path="/cart" element={<CartScreen/>}/>
        <Route path="/cart/:id" element={<CartScreen/>}/>
        </Routes> 
      </Container>
    </main>
    <Footer />
    </Router>
    </>
  )
}

export default App;
