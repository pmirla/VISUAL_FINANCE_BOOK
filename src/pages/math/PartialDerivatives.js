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
              <Link to="./chainRule">ChainRule</Link>
            </li>

            <li>
              <Link to="./dervInplicitFunctions"> DervInplicitFunctions</Link>
            </li>

            <li>
              <Link to="./totalDifferential"> TotalDifferential</Link>
            </li>

            <li>
              <Link to="./directionalDerivative"> DirectionalDerivative</Link>
            </li>

            <li>
              <Link to="./gradients"> Gradients</Link>
            </li>

            <li>
              <Link to="./tangentPlanes"> TangentPlanes</Link>
            </li>

            <li>
              <Link to="./normalLine"> NormalLine</Link>
            </li>

            <li>
              <Link to="./extrema"> Extrema</Link>
            </li>

            <li>
              <Link to="./lagrangeMethod"> LagrangeMethod</Link>
            </li>
          </ul>
          {/* <div>
            <button onClick={handleClick} type="button" />
            Navigation with useHistory
          </div> */}

          <hr />
          <Switch>
            <Route path="/math/partialDervComputataion">
              <PartialDervComputataion />
            </Route>

            <Route path="/math/chainRule">
              <ChainRule />
            </Route>

            <Route path="/math/dervInplicitFunctions">
              <DervInplicitFunctions />
            </Route>

            <Route path="/math/totalDifferential">
              <TotalDifferential />
            </Route>

            <Route path="/math/directionalDerivative">
              <DirectionalDerivative />
            </Route>

            <Route path="/math/gradients">
              <Gradients />
            </Route>

            <Route path="/math/tangentPlanes">
              <TangentPlanes />
            </Route>

            <Route path="/math/normalLine">
              <NormalLine />
            </Route>

            <Route path="/math/extrema">
              <Extrema />
            </Route>

            <Route path="/math/lagrangeMethod">
              <LagrangeMethod />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
export default MultivariateFunctions;

function PartialDervComputataion() {
  return (
    <div>
      <h2>Partial Dervivative Computtaion</h2>
    </div>
  );
}

function ChainRule() {
  return (
    <div>
      <h2>ChainRule</h2>
    </div>
  );
}

function DervInplicitFunctions() {
  return (
    <div>
      <h2>DervInplicitFunctions</h2>
    </div>
  );
}

function TotalDifferential() {
  return (
    <div>
      <h2>TotalDifferential</h2>
    </div>
  );
}

function DirectionalDerivative() {
  return (
    <div>
      <h2>DirectionalDerivative</h2>
    </div>
  );
}

function Gradients() {
  return (
    <div>
      <h2>Gradients</h2>
    </div>
  );
}

function TangentPlanes() {
  return (
    <div>
      <h2>TangentPlanes</h2>
    </div>
  );
}

function NormalLine() {
  return (
    <div>
      <h2>NormalLine</h2>
    </div>
  );
}

function Extrema() {
  return (
    <div>
      <h2>Extrema</h2>
    </div>
  );
}

function LagrangeMethod() {
  return (
    <div>
      <h2>LagrangeMethod to find extrema of a Function</h2>
    </div>
  );
}
