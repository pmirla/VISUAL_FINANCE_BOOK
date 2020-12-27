import React from "react";
import { Redirect } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import LockIcon from "@material-ui/icons/Lock";
import LockOpenIcon from "@material-ui/icons/LockOpen";

import HomeIntro from "./HomeIntro";

export default () => [
  {
    text: "Introduction",
    path: "/home/HomeIntro",
    exact: true,
    Component: HomeIntro,
    Icon: HomeIcon
  },

  {
    path: "/home",
    Component: () => <Redirect to="/home/HomeIntro" />
  } // Default route redirct
];
