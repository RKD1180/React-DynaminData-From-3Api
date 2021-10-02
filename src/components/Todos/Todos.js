import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Todo from "../Todo/Todo";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);
  return (
    <div>
      <Container>
        <h2 className="text-center mt-3 mb-5">
          This Page Data Show From Json Place Holder Api
        </h2>
        <Row>
          {todos.map((todo) => (
            <Todo key={todo.userId} todo={todo}></Todo>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Todos;
