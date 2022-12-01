import React from "react";
import {Row, Col, Button, Image, ListGroup, Card} from "react-bootstrap";
import events from "../eventsData";





const EventScreen = () => {

  const {id} = useParams();
  const event = 'event data here'

  return(
    <>
    <a href="#" className="btn btn-light my-3">Go Back</a>
    <Row>
    <Image src={event.image}/>
    </Row>
    
    <Row>
      <Card>
        <Col>
          <ListGroup>
          <ListGroup.Item>{event.time}</ListGroup.Item>
          <ListGroup.Item>{event.date}</ListGroup.Item>
          <ListGroup.Item>{event.description}</ListGroup.Item>
    
          </ListGroup> 
        </Col>
        </Card> 
        <Col>
        <Card>
          <Row>
            <Col>
            <strong>${event.price}</strong>
            </Col>
          </Row>
          <Row>
            <Button 
            className="btn-block" 
            type="button"
            disabled={event.countInStock === 0}
                >
                 Get Tickets
                </Button>
          </Row>
        </Card>
        </Col>
    </Row>

    </>
  )

}

export default EventScreen