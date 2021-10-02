import React from "react";
import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "./Todo.css";

const Todo = (props) => {
  const { id, title, completed } = props.todo;

  let value = 0;
  if (completed.toString() === "false") {
    value = 0;
  } else {
    value = 1;
  }
  return (
    <Card className="mt-3 bg-dark text-light status">
      <Card.Body className="d-flex">
        <Col className="mt-4">{id}</Col>
        <Col className="mt-4">{title}</Col>
        <Col className="d-flex justify-content-end ">
          {value === 0 ? (
            <div
              className="alert alert-danger w-50 text-center mt-2 "
              role="alert"
            >
              UnCompleted
            </div>
          ) : (
            <div
              className="alert alert-success w-50 text-center mt-2"
              role="alert"
            >
              Completed
            </div>
          )}
        </Col>
      </Card.Body>
    </Card>
  );
};

export default Todo;
