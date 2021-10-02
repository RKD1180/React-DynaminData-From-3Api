import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Detail from "../Detail/Detail";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";

const MealDetail = (props) => {
  const { id } = useParams();
  const [mealdetail, setMealdetail] = useState([]);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMealdetail(data.meals));
  }, []);

  return (
    <div className=" w-50 mx-auto mb-5">
      <Container>
        <Row xs={1} md={1} className="  mt-3  mx-auto">
          {mealdetail.map((meal) => (
            <Detail key={meal.idMeal} meal={meal}></Detail>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MealDetail;
