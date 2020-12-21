import React from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function DifferentiationAndIntegration() {
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
              <Link to="./differentiation">Differentiation</Link>
            </li>

            <li>
              <Link to="./differentiationRules">DifferentiationRules</Link>
            </li>

            <li>
              <Link to="./differentiation">Differentiation</Link>
            </li>

            <li>
              <Link to="./maxAndMinOfFunction">MaxAndMinOfFunction</Link>
            </li>

            <li>
              <Link to="./meanValueTheorm">MeanValueTheorm</Link>
            </li>

            <li>
              <Link to="./taylorsExpansion">TaylorsExpansion</Link>
            </li>

            <li>
              <Link to="./integration">Integration</Link>
            </li>

            <li>
              <Link to="./changeInVariables">ChangeInVariables</Link>
            </li>

            <li>
              <Link to="./doubleIntegral">DoubleIntegral</Link>
            </li>

            <li>
              <Link to="./durationofBond">DurationofBond</Link>
            </li>

            <li>
              <Link to="./convexityofBond">ConvexityofBond</Link>
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

            <Route path="/math/differentiation">
              <Differentiation />
            </Route>

            <Route path="/math/differentiationRules">
              <DifferentiationRules />
            </Route>

            <Route path="/math/maxAndMinOfFunction">
              <MaxAndMinOfFunction />
            </Route>

            <Route path="/math/meanValueTheorm">
              <MeanValueTheorm />
            </Route>

            <Route path="/math/taylorsExpansion">
              <TaylorsExpansion />
            </Route>

            <Route path="/math/integration">
              <Integration />
            </Route>

            <Route path="/math/firstTheormCalculus">
              <FirstTheormCalculus />
            </Route>

            <Route path="/math/changeInVariables">
              <ChangeInVariables />
            </Route>

            <Route path="/math/doubleIntegral">
              <DoubleIntegral />
            </Route>

            <Route path="/math/durationofBond">
              <DurationofBond />
            </Route>

            <Route path="/math/convexityofBond">
              <ConvexityofBond />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
export default DifferentiationAndIntegration;

function ParametricRepresentataion() {
  return (
    <div>
      <h2>parametricRepresentataion</h2>
    </div>
  );
}

function Differentiation() {
  return (
    <div>
      <h2>Differentiation</h2>
    </div>
  );
}

function DifferentiationRules() {
  return (
    <div>
      <h2>DifferentiationRules</h2>
    </div>
  );
}

function MaxAndMinOfFunction() {
  return (
    <div>
      <h2>MaxAndMinOfFunction</h2>
    </div>
  );
}

function MeanValueTheorm() {
  return (
    <div>
      <h2>MeanValueTheorm</h2>
    </div>
  );
}

function TaylorsExpansion() {
  return (
    <div>
      <h2>TaylorsExpansion</h2>
    </div>
  );
}

function Integration() {
  return (
    <div>
      <h2>Integration</h2>
    </div>
  );
}

function FirstTheormCalculus() {
  return (
    <div>
      <h2>FirstTheormCalculus</h2>
    </div>
  );
}

function ChangeInVariables() {
  return (
    <div>
      <h2>ChangeInVariables Indefinite Integrals</h2>
    </div>
  );
}

function DoubleIntegral() {
  return (
    <div>
      <h2> DoubleIntegral</h2>
    </div>
  );
}

function DurationofBond() {
  return (
    <div>
      <h2> DurationofBond</h2>
    </div>
  );
}

function ConvexityofBond() {
  return (
    <div>
      <h2> ConvexityofBond</h2>
    </div>
  );
}
