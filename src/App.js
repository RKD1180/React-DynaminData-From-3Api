import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Meals from "./components/Meals/Meals";
import Header from "./components/Header/Header";
import Peoples from "./components/Peoples/Peoples";
import MealDetail from "./components/MealDetail/MealDetail";
import Todos from "./components/Todos/Todos";

function App() {
  return (
    <div className="">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Meals></Meals>
          </Route>
          <Route path="/food">
            <Meals></Meals>
          </Route>
          <Route path="/people">
            <Peoples></Peoples>
          </Route>
          <Route path="/mealdetail/:id">
            <MealDetail></MealDetail>
          </Route>
          <Route path="/todos">
            <Todos></Todos>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
