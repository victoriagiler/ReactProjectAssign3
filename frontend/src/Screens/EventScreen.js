import React from "react";
import {Row, Col, Button, Image, ListGroup, Card} from "react-bootstrap";
import EventScreenStyle from "./EventScreen.css"
import events from "../eventsData";
import { useParams,Link } from "react-router-dom";

const EventScreen = () => {

  const params = useParams();
  const event = events.find((e) => e._id === params.id)

return(
  <>
  <Link className="btn btn-light my-3" to='/'>Go Back</Link>
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
  
 

  </>
)
}


export default EventScreen


