import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Row, Col, Button, Image, ListGroup, Card, Form} from "react-bootstrap";
import { listEventsDetials } from '../actions/eventActions';
import { useParams,Link, useNavigate } from "react-router-dom";
import Loader from '../Components/Loader'
import Message from '../Components/Message';


const EventScreen = () => {

  const [qty, setQty]= useState(1)
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const eventDetails = useSelector((state) => state.eventDetails)
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
    <Image src={event.image} />
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
          <Col>Status</Col>
          <Col>{event.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
          </Col>
        </ListGroup.Item>
        
        {event.countInStock > 0 && (
          <ListGroup.Item>
            <Row>
              <Col>QTY:</Col>
              <Col>
              <Form.Control
              as = 'select'
              value = {qty}
              onChange={(e) => setQty(e.target.value)}>
                {[...Array(event.countInStock).keys()].map((x) =>(
                  <option key={x + 1} value={x + 1}>
                    {x + 1}

                  </option>
                ))
                }
              </Form.Control>

              </Col>
            </Row>
          </ListGroup.Item>
        )}
        <ListGroup.Item>
          <Row>
          <Button className="btn btn-block" type="button"            
          disabled={event.countInStock === 0}
            onClick={addToCartHandler}>
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


