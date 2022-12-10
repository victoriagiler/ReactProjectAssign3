import React from 'react'
import { Container } from 'react-bootstrap'
import HomeScreen from './Screens/HomeScreen'
import EventScreen from './Screens/EventScreen';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <>
     <Header/>
      <main>
      <Container>   
        <HomeScreen />
      </Container>
    </main>
    <Footer />
    </>
  )
}

export default App;
