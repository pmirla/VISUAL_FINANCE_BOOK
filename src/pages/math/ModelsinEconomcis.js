import React from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function ModelsinEconomcis() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/math/mathsIntro");
  };
  return (
    <>
      <div> Functions And Models in Economics</div>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="./demandAndSupply">
                The Market Model. Demand and Supply Functions{" "}
              </Link>
            </li>
            <li>
              <Link to="./budgetConstratint">Budget Constratint</Link>
            </li>
            <li>
              <Link to="./posisbilityFrontier">
                The Production Posisbility Frontier{" "}
              </Link>
            </li>

            <li>
              <Link to="./utilityFunction">Utility Function</Link>
            </li>

            <li>
              <Link to="./productionFunction">Production Function</Link>
            </li>

            <li>
              <Link to="./utilityFunction">Utility Function</Link>
            </li>
          </ul>

          <hr />
          <Switch>
            <Route path="/math/demandAndSupply">
              <DemandAndSupply />
            </Route>

            <Route path="/math/budgetConstratint">
              <BudgetConstratint />
            </Route>

            <Route path="/math/posisbilityFrontier">
              <PosisbilityFrontier />
            </Route>

            <Route path="/math/utilityFunction">
              <UtilityFunction />
            </Route>

            <Route path="/math/productionFunction">
              <ProductionFunction />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
export default ModelsinEconomcis;

function DemandAndSupply() {
  return (
    <div>
      <h2>demandAndSupply</h2>
    </div>
  );
}

function BudgetConstratint() {
  return (
    <div>
      <h2>budgetConstratint</h2>
    </div>
  );
}

function PosisbilityFrontier() {
  return (
    <div>
      <h2>posisbilityFrontier</h2>
    </div>
  );
}

function UtilityFunction() {
  return (
    <div>
      <h2>utilityFunction</h2>
    </div>
  );
}

function ProductionFunction() {
  return (
    <div>
      <h2>productionFunction</h2>
    </div>
  );
}
