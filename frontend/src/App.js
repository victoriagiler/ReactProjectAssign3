import React from 'react'
import { Container } from 'react-bootstrap'
import HomeScreen from './Screens/HomeScreen'
import EventScreen from './Screens/EventScreen';
import Header from './Components/Header';

function App() {
  return (
    <>
     <Header/>
      <main>
      <Container>   
        <HomeScreen />
      </Container>
    </main>
    </>
  )
}

export default App;
