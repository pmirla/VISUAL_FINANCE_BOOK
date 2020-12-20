import React from "react";
import { Redirect } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";

import BasicStats001 from "./BasicStats001";
import ProbabilityTheory from "./ProbabilityTheory";
import ProbabilityDistributions from "./ProbabilityDistributions";
export default () => [
  {
    text: "Introduction",
    path: "/stats/intro",
    exact: true,
    Component: BasicStats001,
    Icon: HomeIcon
  },
  {
    text: "Probability Thoery",
    path: "/stats/probability",
    exact: true,
    Component: ProbabilityTheory,
    Icon: HomeIcon
  },
  {
    text: "Probability Distributions",
    path: "/stats/distributions",
    exact: true,
    Component: ProbabilityDistributions,
    Icon: HomeIcon
  },
  {
    path: "/basic-stats",
    Component: () => <Redirect to="/stats/intro" />
  }
];
