import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Card, Col } from "react-bootstrap";

const People = (props) => {
  const { name, picture, phone, gender } = props.people;
  //   console.log(props);
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={picture.medium} />
        <Card.Body>
          <Card.Title>
            {name.title} {name.first} {name.last}
          </Card.Title>
          <Card.Text>Gender: {gender}</Card.Text>
          <Card.Text>Phone: {phone}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default People;
