import React, { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import People from "../People/People";

const Peoples = () => {
  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5000")
      .then((res) => res.json())
      .then((data) => setPeoples(data.results));
  }, []);
  return (
    <div className="App">
      {peoples?.length === 0 ? (
        <div className="spin mt-5">
          <Spinner variant="warning" animation="border" />
        </div>
      ) : (
        <Container>
          <Row xs={1} md={3} className="g-4 mt-3">
            {peoples.map((people) => (
              <People key={people.cell} people={people}></People>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Peoples;
