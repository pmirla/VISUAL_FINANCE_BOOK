import React from "react";
import { useHistory } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import ProtectedRoute from "../../components/common/ProtectedRoute";
import LinksAndRoutes from "../../components/common/LinksAndRoutes";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/Inbox";

function DifferentiationAndIntegration() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/math/mathsIntro");
  };

  const linksAndRoutes = [
    {
      text: "ParametricRepresentataion",
      path: "/math/ParametricRepresentataion",
      exact: true,
      Component: <ParametricRepresentataion />
    },
    {
      text: "Differentiation",
      path: "/math/Differentiation",
      exact: true,
      Component: <Differentiation />
    },
    {
      text: "DifferentiationRules",
      path: "/math/DifferentiationRules",
      exact: true,
      Component: <DifferentiationRules />
    },
    {
      text: "MaxAndMinOfFunction",
      path: "/math/MaxAndMinOfFunction",
      exact: true,
      Component: <MaxAndMinOfFunction />
    },
    {
      text: "MeanValueTheorm",
      path: "/math/MeanValueTheorm",
      exact: true,
      Component: <MeanValueTheorm />
    },
    {
      text: "TaylorsExpansion",
      path: "/math/TaylorsExpansion",
      exact: true,
      Component: <TaylorsExpansion />
    },
    {
      text: "Integration",
      path: "/math/Integration",
      exact: true,
      Component: <Integration />
    },
    {
      text: "FirstTheormCalculus",
      path: "/math/FirstTheormCalculus",
      exact: true,
      Component: <FirstTheormCalculus />
    },

    {
      text: "ChangeInVariables",
      path: "/math/ChangeInVariables",
      exact: true,
      Component: <Integration />
    },
    {
      text: "DoubleIntegral",
      path: "/math/DoubleIntegral",
      exact: true,
      Component: <DoubleIntegral />
    },

    {
      text: "DurationofBond",
      path: "/math/DurationofBond",
      exact: true,
      Component: <DurationofBond />
    },

    {
      text: "ConvexityofBond",
      path: "/math/ConvexityofBond",
      exact: true,
      Component: <ConvexityofBond />
    }
  ];

  return (
    <>
      <LinksAndRoutes data={linksAndRoutes} />
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
