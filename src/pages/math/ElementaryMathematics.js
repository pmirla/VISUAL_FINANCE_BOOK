import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GGBInject from "../../components/common/GGBInject";
import { Alert, AlertTitle } from "@material-ui/lab";
import LinksAndRoutes from "../../components/common/LinksAndRoutes";
import useFetchData from "../../components/common/UseFetchData";

import ggbBase6Data from "../data/sample.js";

var fs = require("fs");
var path = require("path");

function ElementaryMathematics() {
  const linksAndRoutes = [
    {
      text: "Vectors and Arrays",
      path: "/math/Vectors",
      exact: true,
      Component: <Vectors />
    },
    {
      text: "Binomials and Polynomials",
      path: "/math/Polynomials",
      exact: true,
      Component: <Polynomials />
    },

    {
      text: "Equations Of Higher Order",
      path: "/math/Equations",
      exact: true,
      Component: <Equations />
    },
    {
      text: "Convergence of Series",
      path: "/math/Series",
      exact: true,
      Component: <Series />
    }
  ];

  return (
    <>
      <div>Elementary Mathematics</div>
      <>
        <LinksAndRoutes data={linksAndRoutes} />
      </>
    </>
  );
}
export default ElementaryMathematics;

function Objects() {
  const newParameters = {
    material_id: "tJCz43F3",
    width: 600,
    borderColor: "#FFFFFF"
  };
  return (
    <>
      <div>
        <h2>Objects</h2>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          This is an error alert — <strong>check it out!</strong>
        </Alert>
        <GGBInject newParameters={newParameters} id="someId1" />
        <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          This is a warning alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="info">
          <AlertTitle>Info</AlertTitle>
          This is an info alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
        </Alert>
      </div>
    </>
  );
}

function Vectors() {
  useEffect(() => {}, []);

  const [{ data, isLoading, isError }, setFetchUrl] = useFetchData({
    initialFetchUrl:
      "https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/fin-math-images/sum_of_vectors_02.json"
  });
  let newParameters2 = {};
  if (!isLoading)
    if (typeof data.res !== "undefined") {
      newParameters2 = {
        // material_id: "ee5nfsq6",
        width: 1200,
        height: 1000,
        borderColor: "#FFFFFF",
        ggbBase64: data.res
      };
    }

  return (
    <>
      {isError && <p>Something went wrong...</p>}
      <h2>Vector Addition </h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Alert severity="info">
            <AlertTitle>Loading Applet</AlertTitle>
            Interact with this Applet to understand the formula —{" "}
            <strong>check it out!</strong>
          </Alert>
          <GGBInject newParameters={newParameters2} id="someId1" />
        </>
      )}
    </>
  );
}

function Polynomials() {
  return (
    <div>
      <h2>Polynomials</h2>
    </div>
  );
}

function Equations() {
  useEffect(() => {
    console.log("reading data");
  }, []);

  return (
    <div>
      <h2>Equations</h2>
    </div>
  );
}

function Series() {
  const newParameters = {
    material_id: "tb88mqrm",
    width: 600
  };
  return (
    <div>
      <h2>Series</h2>
      <GGBInject newParameters={newParameters} id="someId1" />
    </div>
  );
}
