import React from "react";
import {Row, Col, Button, Image, ListGroup, Card} from "react-bootstrap";
import EventScreenStyle from "./EventScreen.css"
import events from "../eventsData";

const EventScreen = () => {

//   const {id} = useParams();
  const event = events

return(
  <>
  <a href="#" className="btn btn-light my-3">Go Back</a>
  <Row>
  <Image src={event.image}/>
  </Row>
  
  <Row>
    
      <Col md={7}>
        <ListGroup className="descripCard">
        <ListGroup.Item>{event.time}</ListGroup.Item>
        <ListGroup.Item>{event.date}</ListGroup.Item>
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


