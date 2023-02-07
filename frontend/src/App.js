import React from 'react'
import { Container } from 'react-bootstrap'
import HomeScreen from './Screens/HomeScreen'
import EventScreen from './Screens/EventScreen';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import CartScreen from './Screens/CartScreen';
import LoginScreen from './Screens/LoginScreen';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';
import ShippingScreen from './Screens/ShippingScreen';
import PaymentScreen from './Screens/PaymentScreen';

function App() {
  return (
    <>
    <Router>
     <Header/>
      <main>
      <Container>  
        <Routes>
        <Route path="/" element={<HomeScreen />} exact />
        <Route path="/login" element={<LoginScreen/>}/>
        <Route path="/ShippingScreen" element={<ShippingScreen/>}/>
        <Route path="/payment" element={<PaymentScreen/>}/>
        <Route path="/event/:id" element={<EventScreen/>}/>
        <Route path="/cart" element={<CartScreen/>}/>
        <Route path="/cart/:id" element={<CartScreen/>}/>
        <Route path ="/placeorder" element={<PlaceOrderScreen/>}/>

        </Routes> 
      </Container>
    </main>
 
    </Router>
    </>
  )
}

export default App;
