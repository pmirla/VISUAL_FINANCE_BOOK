import React from "react";
import { Redirect } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";

import Example from "./Example";

export default () => [
  {
    text: "Example",
    path: "/inbound/example",
    exact: true,
    Component: Example,
    Icon: HomeIcon
  },
  { path: "/inbound", Component: () => <Redirect to="/inbound/example" /> } // Default route redirct
];
