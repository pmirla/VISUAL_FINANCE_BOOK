import React from "react";
import LinksAndRoutes from "../../components/common/LinksAndRoutes";

function MultivariateFunctions() {
  const linksAndRoutes = [
    {
      text: "ParametricRepresentataion",
      path: "/math/ParametricRepresentataion",
      exact: true,
      Component: <ParametricRepresentataion />
    },
    {
      text: "LevelCurves",
      path: "/math/LevelCurves",
      exact: true,
      Component: <LevelCurves />
    }
  ];
  return (
    <>
      <div> Multivariate Functions in Finance and Economics</div>
      <LinksAndRoutes data={linksAndRoutes} />
    </>
  );
}
export default MultivariateFunctions;

function ParametricRepresentataion() {
  return (
    <div>
      <h2>parametricRepresentataion</h2>
    </div>
  );
}

function LevelCurves() {
  return (
    <div>
      <h2>levelCurves</h2>
    </div>
  );
}
