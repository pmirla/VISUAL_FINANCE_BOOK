import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GGBInject from "../../components/common/GGBInject";
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
  const newParameters = {
    material_id: "tJCz43F3",
    width: 600
  };
  return (
    <>
      <div>
        <h2>Objects</h2>
        <GGBInject newParameters={newParameters} id="someId1" />
      </div>
    </>
  );
}

function Variables() {
  const newParameters = {
    material_id: "SJmxRvKC",
    width: 600
  };
  return (
    <div>
      <h2>Variables</h2>
      <GGBInject newParameters={newParameters} id="someId1" />
      <GGBInject newParameters={newParameters} id="someId2" />
      <GGBInject newParameters={newParameters} id="someId3" />
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
  const newParameters = {
    material_id: "qWp97U9T",
    width: 600
  };
  return (
    <div>
      <h2>Series</h2>
      <GGBInject newParameters={newParameters} id="someId1" />
    </div>
  );
}
