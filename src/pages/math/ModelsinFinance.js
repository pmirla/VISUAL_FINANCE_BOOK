import React from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function ModelsinFinance() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/math/mathsIntro");
  };
  return (
    <>
      <div> Functions And Models in Finance</div>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="./presentValue">Present Value Function </Link>
            </li>
            <li>
              <Link to="./capm">The Capital Asset Pricing Model CAPM </Link>
            </li>
            <li>
              <Link to="./futuresContractPayoff">
                Payoff of Futures contract{" "}
              </Link>
            </li>
            <li>
              <Link to="./optionsContractPayoff">
                Payoff of Options Contract{" "}
              </Link>
            </li>

            <li>
              <Link to="./swapPayoff">Payoff of Swaps Contract </Link>
            </li>

            <li>
              <Link to="./optionPrice">Price of Option</Link>
            </li>

            <li>
              <Link to="./forwardExchangeRate">Forward Exchange Rate</Link>
            </li>
          </ul>
          <div>
            <button onClick={handleClick} type="button" />
            Navigation with useHistory
          </div>

          <hr />
          <Switch>
            <Route path="/math/presentValue">
              <PresentValue />
            </Route>
            <Route path="/math/capm">
              <Capm />
            </Route>
            <Route path="/math/futuresContractPayoff">
              <FuturesContractPayoff />
            </Route>
            <Route path="/math/optionsContractPayoff">
              <OptionsContractPayoff />
            </Route>

            <Route path="/math/swapPayoff">
              <SwapPayoff />
            </Route>

            <Route path="/math/optionPrice">
              <OptionPrice />
            </Route>

            <Route path="/math/forwardExchangeRate">
              <ForwardExchangeRate />
            </Route>

            <Route path="/math/forwardExchangeRate">
              <ForwardExchangeRate />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
export default ModelsinFinance;

function PresentValue() {
  return (
    <div>
      <h2>PresentValue</h2>
    </div>
  );
}

function Capm() {
  return (
    <div>
      <h2>Capm</h2>
    </div>
  );
}

function FuturesContractPayoff() {
  return (
    <div>
      <h2>FuturesContractPayoff</h2>
    </div>
  );
}

function OptionsContractPayoff() {
  return (
    <div>
      <h2>OptionsContractPayoff</h2>
    </div>
  );
}

function SwapPayoff() {
  return (
    <div>
      <h2>SwapPayoff</h2>
    </div>
  );
}

function OptionPrice() {
  return (
    <div>
      <h2>OptionPrice</h2>
    </div>
  );
}

function ForwardExchangeRate() {
  return (
    <div>
      <h2>ForwardExchangeRate</h2>
    </div>
  );
}
