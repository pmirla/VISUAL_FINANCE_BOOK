import React from "react";
import LinksAndRoutes from "../../components/common/LinksAndRoutes";

function MultivariateFunctions() {
  const linksAndRoutes = [
    {
      text: "PartialDervComputataion",
      path: "/math/PartialDervComputataion",
      exact: true,
      Component: <PartialDervComputataion />
    },
    {
      text: "ChainRule",
      path: "/math/ChainRule",
      exact: true,
      Component: <ChainRule />
    },
    {
      text: "DervInplicitFunctions",
      path: "/math/DervInplicitFunctions",
      exact: true,
      Component: <DervInplicitFunctions />
    },
    {
      text: "TotalDifferential",
      path: "/math/TotalDifferential",
      exact: true,
      Component: <TotalDifferential />
    },
    {
      text: "DirectionalDerivative",
      path: "/math/DirectionalDerivative",
      exact: true,
      Component: <DirectionalDerivative />
    },
    {
      text: "Gradients",
      path: "/math/Gradients",
      exact: true,
      Component: <Gradients />
    },
    {
      text: "TangentPlanes",
      path: "/math/TangentPlanes",
      exact: true,
      Component: <TangentPlanes />
    },
    {
      text: "NormalLine",
      path: "/math/NormalLine",
      exact: true,
      Component: <NormalLine />
    },
    {
      text: "Extrema",
      path: "/math/Extrema",
      exact: true,
      Component: <Extrema />
    },
    {
      text: "LagrangeMethod",
      path: "/math/LagrangeMethod",
      exact: true,
      Component: <LagrangeMethod />
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

function PartialDervComputataion() {
  return (
    <div>
      <h2>Partial Dervivative Computtaion</h2>
    </div>
  );
}

function ChainRule() {
  return (
    <div>
      <h2>ChainRule</h2>
    </div>
  );
}

function DervInplicitFunctions() {
  return (
    <div>
      <h2>DervInplicitFunctions</h2>
    </div>
  );
}

function TotalDifferential() {
  return (
    <div>
      <h2>TotalDifferential</h2>
    </div>
  );
}

function DirectionalDerivative() {
  return (
    <div>
      <h2>DirectionalDerivative</h2>
    </div>
  );
}

function Gradients() {
  return (
    <div>
      <h2>Gradients</h2>
    </div>
  );
}

function TangentPlanes() {
  return (
    <div>
      <h2>TangentPlanes</h2>
    </div>
  );
}

function NormalLine() {
  return (
    <div>
      <h2>NormalLine</h2>
    </div>
  );
}

function Extrema() {
  return (
    <div>
      <h2>Extrema</h2>
    </div>
  );
}

function LagrangeMethod() {
  return (
    <div>
      <h2>LagrangeMethod to find extrema of a Function</h2>
    </div>
  );
}
