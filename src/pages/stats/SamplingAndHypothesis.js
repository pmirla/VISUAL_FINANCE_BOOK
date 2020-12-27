import React from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GGBInject from "../../components/common/GGBInject";

function SamplingAndHypothesis() {
  return (
    <>
      <div>Probability Thoery</div>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="./SamplingDistributionMean">
                SamplingDistributionMean
              </Link>
            </li>
            <li>
              <Link to="./SamplingDistributionProportions">
                SamplingDistributionProportions
              </Link>
            </li>
            <li>
              <Link to="./SamplingDistributionDiff">
                SamplingDistributionDiff
              </Link>
            </li>
            <li>
              <Link to="./ParameterEstimation">ParameterEstimation</Link>
            </li>
            <li>
              <Link to="./ConfidenceIntervals">ConfidenceIntervals</Link>
            </li>
            <li>
              <Link to="./HypothesisTesting"> HypothesisTesting</Link>
            </li>
            <li>
              <Link to="./LevelOfSignificance"> LevelOfSignificance</Link>
            </li>
            <li>
              <Link to="./PValue"> PValue</Link>
            </li>

            <li>
              <Link to="./Samplingtests"> Samplingtests</Link>
            </li>
          </ul>

          <hr />
          <Switch>
            <Route path="/stats/SamplingDistributionMean">
              <SamplingDistributionMean />
            </Route>

            <Route path="/stats/SamplingDistributionProportions">
              <SamplingDistributionProportions />
            </Route>

            <Route path="/stats/SamplingDistributionDiff">
              <SamplingDistributionDiff />
            </Route>

            <Route path="/stats/ParameterEstimation">
              <ParameterEstimation />
            </Route>

            <Route path="/stats/ConfidenceIntervals">
              <ConfidenceIntervals />
            </Route>

            <Route path="/stats/HypothesisTesting">
              <HypothesisTesting />
            </Route>

            <Route path="/stats/LevelOfSignificance">
              <LevelOfSignificance />
            </Route>

            <Route path="/stats/PValue">
              <PValue />
            </Route>

            <Route path="/stats/Samplingtests">
              <Samplingtests />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
export default SamplingAndHypothesis;

function SamplingDistributionMean() {
  const newParameters1 = {
    material_id: "uk75mjna",
    width: 750,
    height: 700
    // ggbBase64:""
  };

  return (
    <div>
      <h2>SamplingDistributionMean</h2>
      <GGBInject newParameters={newParameters1} id="someId1" />
    </div>
  );
}

function SamplingDistributionProportions() {
  return (
    <div>
      <h2>SamplingDistributionProportions</h2>
    </div>
  );
}

function SamplingDistributionDiff() {
  return (
    <div>
      <h2>SamplingDistributionDiff</h2>
    </div>
  );
}

function ParameterEstimation() {
  return (
    <div>
      <h2>ParameterEstimation</h2>
    </div>
  );
}

function ConfidenceIntervals() {
  return (
    <div>
      <h2>Probabilitydistribution</h2>
    </div>
  );
}

function HypothesisTesting() {
  return (
    <div>
      <h2>Moments</h2>
    </div>
  );
}

function LevelOfSignificance() {
  const newParameters = {
    material_id: "gd3whp9d",
    width: 680,
    height: 650
    // ggbBase64:""
  };

  return (
    <div>
      <h2>LevelOfSignificance</h2>
      <GGBInject newParameters={newParameters} id="someId1" />
      https://www.geogebra.org/m/gd3whp9d
    </div>
  );
}

function PValue() {
  return (
    <div>
      <h2>PValue</h2>
    </div>
  );
}

function Samplingtests() {
  return (
    <div>
      <h2>Samplingtests</h2>
    </div>
  );
}
