import React from "react";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Detail = (props) => {
  const {
    idMeal,
    strMeal,
    strInstructions,
    strMealThumb,
    strCategory,
    strArea,
  } = props.meal;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={strMealThumb} height="400px" />
        <Card.Body>
          <Card.Title>{strMeal}</Card.Title>
          <Card.Text>{strInstructions.slice(0, 300)}</Card.Text>
          <Card.Text>Category: {strCategory}</Card.Text>
          <Card.Text>Area :{strArea}</Card.Text>
          <div className="text-center">
            <Button variant="primary" size="lg">
              <Link className="text-white " to="/food">
                Back
              </Link>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Detail;
