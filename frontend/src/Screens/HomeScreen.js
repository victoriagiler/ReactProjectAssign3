import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Event from '../Components/Event'
import { listEvents } from '../actions/eventActions'


const Home = () => {

  const dispatch = useDispatch()
  const eventList = useSelector((state) => state.eventList)
  const {loading, error, events} = productList
  
  useEffect(()=>{
    dispatch(listEvents())
  },[dispatch])
  
  
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