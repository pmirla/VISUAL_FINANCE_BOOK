import React from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function MultivariateFunctions() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/math/mathsIntro");
  };
  return (
    <>
      <div> Multivariate Functions in Finance and Economics</div>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="./parametricRepresentataion">
                Parametric Repressentaion
              </Link>
            </li>
            <li>
              <Link to="./levelCurves">Level Curves</Link>
            </li>
          </ul>
          <div>
            <button onClick={handleClick} type="button" />
            Navigation with useHistory
          </div>

          <hr />
          <Switch>
            <Route path="/math/parametricRepresentataion">
              <ParametricRepresentataion />
            </Route>
            <Route path="/math/levelCurves">
              <LevelCurves />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
export default MultivariateFunctions;

function ParametricRepresentataion() {
  return (
    <div>
      <h2>parametricRepresentataion</h2>
    </div>
  );
}

function LevelCurves() {
  return (
    <div>
      <h2>levelCurves</h2>
    </div>
  );
}
