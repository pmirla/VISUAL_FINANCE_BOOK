import React from "react";
import { Redirect } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";

import StatsIntro from "./StatsIntro";
import ProbabilityTheory from "./ProbabilityTheory";
import ProbabilityDistributions from "./ProbabilityDistributions";
import SamplingAndHypothesis from "./SamplingAndHypothesis";
export default () => [
  {
    text: "Introduction",
    path: "/stats/intro",
    exact: true,
    Component: StatsIntro,
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
    text: "Sampling & Hypothesis",
    path: "/stats/sampling",
    exact: true,
    Component: SamplingAndHypothesis,
    Icon: HomeIcon
  },
  {
    path: "/stats",
    Component: () => <Redirect to="/stats/intro" />
  }
];
