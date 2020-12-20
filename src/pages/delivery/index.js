import React from "react";
import { Redirect } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";

import Example from "./Example";
import Example2 from "./Example2";
export default () => [
  {
    text: "Example",
    path: "/delivery/example",
    exact: true,
    Component: Example,
    Icon: HomeIcon
  },
  {
    text: "Example2",
    path: "/delivery/example2",
    exact: true,
    Component: Example2,
    Icon: HomeIcon
  },

  { path: "/delivery", Component: () => <Redirect to="/delivery/example" /> } // Default route redirct
];
