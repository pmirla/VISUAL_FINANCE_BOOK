import React from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function ProbabilityTheory() {
  return (
    <>
      <div>Probability Thoery</div>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="./samplespace">Sample spaceand Events</Link>
            </li>
            <li>
              <Link to="./definition">Definition of Probability</Link>
            </li>
            <li>
              <Link to="./counting">Counting Techniques</Link>
            </li>
            <li>
              <Link to="./conditionalprobability">Conditional Probability</Link>
            </li>
            <li>
              <Link to="./probabilitydistribution">
                Probability Distribution
              </Link>
            </li>
            <li>
              <Link to="./moments"> Moments of Probability Distribution</Link>
            </li>
            <li>
              <Link to="./jointdistribution"> Joint Distribution</Link>
            </li>
            <li>
              <Link to="./largenumbers"> Law of Large Numbers</Link>
            </li>
          </ul>

          <hr />
          <Switch>
            <Route path="/stats/samplespace">
              <Samplespace />
            </Route>
            <Route path="/stats/definition">
              <Definition />
            </Route>
            <Route path="/stats/counting">
              <Counting />
            </Route>
            <Route path="/stats/conditionalprobability">
              <Conditionalprobability />
            </Route>
            <Route path="/stats/probabilitydistribution">
              <Probabilitydistribution />
            </Route>
            <Route path="/stats/moments">
              <Moments />
            </Route>
            <Route path="/stats/jointdistribution">
              <Jointdistribution />
            </Route>

            <Route path="/stats/largenumbers">
              <Largenumbers />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
export default ProbabilityTheory;

function Samplespace() {
  return (
    <div>
      <h2>Samplespace</h2>
    </div>
  );
}

function Definition() {
  return (
    <div>
      <h2>Definition</h2>
    </div>
  );
}

function Counting() {
  return (
    <div>
      <h2>Counting</h2>
    </div>
  );
}

function Conditionalprobability() {
  return (
    <div>
      <h2>Conditionalprobability</h2>
    </div>
  );
}

function Probabilitydistribution() {
  return (
    <div>
      <h2>Probabilitydistribution</h2>
    </div>
  );
}

function Moments() {
  return (
    <div>
      <h2>Moments</h2>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Jointdistribution() {
  return (
    <div>
      <h2>Jointdistribution</h2>
    </div>
  );
}

function Largenumbers() {
  return (
    <div>
      <h2>Largenumbers</h2>
    </div>
  );
}
