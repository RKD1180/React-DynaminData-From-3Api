import { useEffect, useState } from "react";
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import Meal from "./../Meal/Meal";

const Meals = () => {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [search]);

  const handleSearch = (e) => {
    const getText = e.target.value;
    setSearch(getText);
  };
  return (
    <div className="App">
      <Container className="mt-3 w-50">
        <h2 className="text-center mt-3 mb-5">
          This Data Show From Meal Db Api
        </h2>
        <Row>
          <InputGroup className="mb-3">
            <FormControl
              onChange={handleSearch}
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="warning" id="button-addon2">
              Button
            </Button>
          </InputGroup>
        </Row>
      </Container>

      <Container>
        <Row xs={1} md={3} className="g-4 mt-3">
          {meals?.length ? (
            meals.map((meal) => <Meal key={meal.idMeal} meal={meal}></Meal>)
          ) : (
            <h2>Data Not Found???</h2>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Meals;
