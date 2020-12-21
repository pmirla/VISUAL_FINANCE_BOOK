import React from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function ElementaryMathematics() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/math/mathsIntro");
  };
  return (
    <>
      <div>Elementary Mathematics</div>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="./objects">Basic Mathematical Objects</Link>
            </li>
            <li>
              <Link to="./variables">Variables, Binomials and Polynomials</Link>
            </li>
            <li>
              <Link to="./equations">High Order Equations </Link>
            </li>
            <li>
              <Link to="./series">Series and Convergence</Link>
            </li>
          </ul>

          <hr />
          <Switch>
            <Route path="/math/objects">
              <Objects />
            </Route>
            <Route path="/math/variables">
              <Variables />
            </Route>
            <Route path="/math/equations">
              <Equations />
            </Route>
            <Route path="/math/series">
              <Series />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
export default ElementaryMathematics;

function Objects() {
  return (
    <div>
      <h2>Objects</h2>
    </div>
  );
}

function Variables() {
  return (
    <div>
      <h2>Variables</h2>
    </div>
  );
}

function Equations() {
  return (
    <div>
      <h2>Equations</h2>
    </div>
  );
}

function Series() {
  return (
    <div>
      <h2>Series</h2>
    </div>
  );
}
