import React from "react";
import { Redirect } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import LockIcon from "@material-ui/icons/Lock";
import LockOpenIcon from "@material-ui/icons/LockOpen";

import MathsIntro from "./MathsIntro";
import ElementaryMathematics from "./ElementaryMathematics";
import ModelsinEconomcis from "./ModelsinEconomcis";
import ModelsinFinance from "./ModelsinFinance";
import MultivariateFunctions from "./MultivariateFunctions";
import DifferentiationAndIntegration from "./DifferentiationAndIntegration";
import PartialDerivatives from "./PartialDerivatives";

export default () => [
  {
    text: "Introduction",
    path: "/math/mathsIntro",
    exact: true,
    Component: MathsIntro,
    Icon: HomeIcon
  },
  {
    text: "Eelementary Mathematics",
    path: "/math/mathElementary",
    exact: true,
    Component: ElementaryMathematics,
    Icon: LockOpenIcon
  },
  {
    text: "Models in Economcis",
    path: "/math/ModelsinEconomcis",
    exact: true,
    Component: ModelsinEconomcis,
    Icon: LockIcon
  },

  {
    text: "Models in Finance",
    path: "/math/ModelsinFinance",
    exact: true,
    Component: ModelsinFinance,
    Icon: LockIcon
  },
  {
    text: "Multivariate Functions",
    path: "/math/MultivariateFunctions",
    exact: true,
    Component: MultivariateFunctions,
    Icon: LockIcon
  },

  {
    text: "Differentiation And Integration",
    path: "/math/DifferentiationAndIntegration",
    exact: true,
    Component: DifferentiationAndIntegration,
    Icon: LockIcon
  },
  {
    text: "Partial Derivatives",
    path: "/math/partialDerivatives",
    exact: true,
    Component: PartialDerivatives,
    Icon: LockIcon
  },

  {
    path: "/math",
    Component: () => <Redirect to="/math/mathsIntro" />
  } // Default route redirct
];
