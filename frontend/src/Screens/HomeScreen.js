import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Event from '../Components/Event'
import events from '../eventsData'

const Home = () => {
  return (
    <>
    
    <img src="https://images.pexels.com/photos/1782146/pexels-photo-1782146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Italian Trulli" ></img>

    <h1>Latest Events</h1>

    <Row>
      {events.map((event)=> (
        <Col sm={12} md={6} lg={4} xl={4}>
        <Event event={event} />
        </Col>
      ))}
    </Row>
    </>
    
  )
}

export default Home