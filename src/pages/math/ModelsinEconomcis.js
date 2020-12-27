import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GGBApplet from "./geogebrascript.js";
import Button from "@material-ui/core/Button";

function ModelsinEconomcis() {
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
  const [textForBox, SetextForBox] = useState("");

  var parameters = {
    width: 550,
    height: 500,
    // showToolBar: true,
    borderColor: "null",
    showMenuBar: false,
    showAlgebraInput: false,
    customToolbar: "0 || 1",
    showResetIcon: true,
    enableLabelDrags: false,
    enableShiftDragZoom: true,
    enableRightClick: false,
    capturingThreshold: null,
    showToolBarHelp: true,
    errorDialogsActive: true,
    useBrowserForJS: false,
    // material_id: "EzVvFwnf",
    ggbBase64:
      "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"
  };

  parameters = {
    id: "app1",
    width: 435,
    height: 185,
    showToolBar: false,
    borderColor: null,
    showMenuBar: false,
    showAlgebraInput: false,
    showResetIcon: true,
    enableLabelDrags: false,
    enableShiftDragZoom: true,
    enableRightClick: false,
    capturingThreshold: null,
    showToolBarHelp: false,
    errorDialogsActive: true,
    useBrowserForJS: false,
    ggbBase64:
      "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"
  };

  parameters.appletOnLoad = function (api) {
    var strLength = 150;
    var consState = document.getElementsByName("consState")[0];
    function updateListener(objName) {
      const strVal = api.getValueString(objName) + "";
      if (objName == "e") SetextForBox(strVal);
      consState.value = strVal + "\n" + consState.value.substring(0, strLength);
    }

    function printConstructionState() {
      var objNumber = api.getObjectNumber();
      var strState = "Number of objects: " + objNumber;
      for (let i = 0; i < objNumber; i++) {
        const strName = api.getObjectName(i);
        const strType = api.getObjectType(strName);
        const strCommand = api.getCommandString(strName);
        strState += "\n" + strType + " " + strName + ", " + strCommand;
      }
      consState.value = strState;
    }
    api.registerUpdateListener(updateListener);
  };

  var applet = new GGBApplet(parameters, "5.0");

  useEffect(() => {
    applet.inject("someId");
  }, []);

  function handleClick() {
    window.app1.setValue("a", 10.1);
    console.log(window.app1.getValue("a"));
    window.app1.setGridVisible(true);
    window.app1.setVisible("A", false);
    window.app1.setVisible("B", false);
    window.app1.setVisible("C", false);
  }

  // window.onload = function () {
  //   alert("window")
  //   applet.inject("applet_container");
  // };

  return (
    <div>
      <h2>demandAndSupply</h2>
      <div id="someId"></div>
      <div style={{ float: "left" }}>
        <label>Current Construction State: {textForBox}</label>
        <textarea
          name="consState"
          wrap="physical"
          cols="30"
          rows="12"
        ></textarea>

        <button onClick={handleClick}>Click me Debugger</button>
      </div>
    </div>
  );
}

function BudgetConstratint() {
  var parameters1 = {
    id: "app1",
    width: 435,
    height: 185,
    showToolBar: false,
    borderColor: null,
    showMenuBar: false,
    showAlgebraInput: false,
    showResetIcon: true,
    enableLabelDrags: false,
    enableShiftDragZoom: true,
    enableRightClick: false,
    capturingThreshold: null,
    showToolBarHelp: false,
    errorDialogsActive: true,
    useBrowserForJS: false,
    ggbBase64:
      "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"
  };

  var applet1 = new GGBApplet(parameters1, "5.0");
  //  when used with Math Apps Bundle, uncomment this:
  //applet1.setHTML5Codebase('GeoGebra/HTML5/5.0/web/');

  var parameters2 = {
    id: "app2",
    width: 435,
    height: 200,
    showToolBar: false,
    borderColor: null,
    showMenuBar: false,
    showAlgebraInput: false,
    showResetIcon: true,
    enableLabelDrags: false,
    enableShiftDragZoom: true,
    enableRightClick: false,
    capturingThreshold: null,
    showToolBarHelp: false,
    errorDialogsActive: true,
    useBrowserForJS: false,
    ggbBase64:
      "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"
  };

  var applet2 = new GGBApplet("5.0", parameters2);
  //  when used with Math Apps Bundle, uncomment this:
  //applet2.setHTML5Codebase('GeoGebra/HTML5/5.0/webSimple/');

  window.addEventListener("load", function () {
    applet1.inject("applet_container1");
    applet2.inject("applet_container2");
  });

  return (
    <>
      <h2>budgetConstratint</h2>
      <div id="applet_container1"></div>
      <form>
        <input
          value="Set point A invisible"
          onclick="app1.setVisible('A', false)"
          type="button"
        />
        <input
          value="Set point A visible"
          onclick="app1.setVisible('A', true)"
          type="button"
        />
      </form>
    </>
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
