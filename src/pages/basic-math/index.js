import React from "react";
import { Redirect } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import LockIcon from "@material-ui/icons/Lock";
import LockOpenIcon from "@material-ui/icons/LockOpen";

import Example from "./001_Index";
import Example2 from "./Example2";
import Example3 from "./Example3";

export default () => [
  {
    text: "Why Basic Math?",
    path: "/basic-math/example",
    exact: true,
    Component: Example,
    Icon: LockOpenIcon
  },
  {
    text: "Basic Math Index2",
    path: "/basic-math/example2",
    exact: true,
    Component: Example2,
    Icon: LockOpenIcon
  },
  {
    text: "useHistory",
    path: "/basic-math/example3",
    exact: true,
    Component: Example3,
    Icon: LockIcon
  },

  {
    path: "/basic-math",
    Component: () => <Redirect to="/basic-math/example" />
  } // Default route redirct
];
