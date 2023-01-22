// import React from "react";
import React, { useEffect, /*useState*/ } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Row, Col, Button, Image, ListGroup, Card} from "react-bootstrap";
import EventScreenStyle from "./EventScreen.css"
import { listEventsDetials } from '../actions/eventActions';
import { useParams,Link, useNavigate } from "react-router-dom";
//import axios from 'axios'
import Event from '../Components/Event';

const EventScreen = () => {

  const [qty, setQty]= useState(1)
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch()

  
 // const [event, setEvent] = useState({}) **this was deleted as part of clean up
  /*useEffect(() =>{
    const fetchEvent = async() =>{
      const {data} = await axios.get(`/api/event/${params.id}`)
      setEvent(data)
    }
    fetchEvent()
  })*/

  const eventDetails = useSelector((state) => state.
  eventDetails)
  const {loading, error, event} = eventDetails
  useEffect(() =>{
   dispatch(listEventsDetials(params.id))
  }, [dispatch,params])

    const addToCartHandler = () => {
    navigate(`/cart/${params.id}?qty=${qty}`)}

return(
  <>
  <Link className="btn btn-light my-3" to='/'>Go Back</Link>
  {loading ? (
      <Loader />
    ) : error ? (
      <Message variant='danger'>{error}</Message>
    ) : (
  <div>
  <Row>
  <Image src={event.image}/>
  </Row>
  
  <Row>
    
      <Col md={7}>
        <ListGroup className="descripCard">
        <ListGroup.Item>{event.title}</ListGroup.Item>
        <ListGroup.Item>{event.dateTime}</ListGroup.Item>
        <ListGroup.Item>{event.description}</ListGroup.Item>
  
        </ListGroup> 
      </Col>
    
      <Col md={5}>

      <Card className="cardPrice">
        <ListGroup.Item className="price"><strong>${event.price}</strong></ListGroup.Item>
        <ListGroup.Item>
          <Row>
          <Button className="btn btn-block" type="button">
            Get Tickets 
          </Button>
          </Row>
        </ListGroup.Item>
      </Card>
      </Col>            
  </Row>
  </div>
    )}
  </>
)
}


export default EventScreen


