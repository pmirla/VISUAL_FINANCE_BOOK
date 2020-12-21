import React from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function ProbabilityDistributions() {
  return (
    <>
      <div>Probability Distributions</div>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="./uniform">The Uniform Distribution</Link>
            </li>
            <li>
              <Link to="./bernoulli">The Bernoulli Distribution</Link>
            </li>
            <li>
              <Link to="./binomial">The Binomial Distribution </Link>
            </li>
            <li>
              <Link to="./normalDist">The Normal Distribution</Link>
            </li>
            <li>
              <Link to="./chiSquare">The Chi-Square Distribution</Link>
            </li>
            <li>
              <Link to="./tDist"> The t Distribution</Link>
            </li>
            <li>
              <Link to="./fDist"> The F Distribution</Link>
            </li>
            <li>
              <Link to="./momentGeneration"> Momemnt Generating Functions</Link>
            </li>
          </ul>

          <hr />
          <Switch>
            <Route path="/stats/uniform">
              <Uniform />
            </Route>
            <Route path="/stats/bernoulli">
              <Bernoulli />
            </Route>
            <Route path="/stats/binomial">
              <Binomial />
            </Route>
            <Route path="/stats/normalDist">
              <NormalDist />
            </Route>
            <Route path="/stats/chiSquare">
              <ChiSquare />
            </Route>
            <Route path="/stats/TDist">
              <TDist />
            </Route>
            <Route path="/stats/fDist">
              <FDist />
            </Route>

            <Route path="/stats/momentGeneration">
              <MomentGeneration />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
export default ProbabilityDistributions;

function Uniform() {
  return (
    <div>
      <h2>Uniform</h2>
    </div>
  );
}

function Bernoulli() {
  return (
    <div>
      <h2>Bernoulli</h2>
    </div>
  );
}

function Binomial() {
  return (
    <div>
      <h2>Binomial</h2>
    </div>
  );
}

function NormalDist() {
  return (
    <div>
      <h2>normalDist</h2>
    </div>
  );
}

function ChiSquare() {
  return (
    <div>
      <h2>ChiSquare</h2>
    </div>
  );
}

function TDist() {
  return (
    <div>
      <h2>TDist</h2>
    </div>
  );
}

function FDist() {
  return (
    <div>
      <h2>FDist</h2>
    </div>
  );
}

function MomentGeneration() {
  return (
    <div>
      <h2>MomentGeneration</h2>
    </div>
  );
}
