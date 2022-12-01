import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Event from '../Components/Event'
import events from '../eventsData'

const Home = () => {
  return (
    <>
    <h1>Latest Events</h1>
    <Row>
      {events.map((event)=> (
        <Col sm={12} md={6} lg={4} xl={3}>
        <Event event={event} />
        </Col>
      ))}
    </Row>
    </>
    
  )
}

export default Home