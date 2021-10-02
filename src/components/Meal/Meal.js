import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Meal = (props) => {
  const { idMeal, strMeal, strInstructions, strMealThumb } = props.meal;
  const url = `/mealdetail/${idMeal}`;

  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={strMealThumb} />
        <Card.Body>
          <Card.Title>{strMeal}</Card.Title>
          <Card.Text>{strInstructions.slice(0, 100)}</Card.Text>
          <Button variant="primary">
            <Link className="text-white" to={url}>
              See Details
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Meal;
