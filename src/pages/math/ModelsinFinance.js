import React from "react";
import LinksAndRoutes from "../../components/common/LinksAndRoutes";

function ModelsinFinance() {
  const linksAndRoutes = [
    {
      text: "PresentValue",
      path: "/math/PresentValue",
      exact: true,
      Component: <PresentValue />
    },
    {
      text: "Capm",
      path: "/math/Capm",
      exact: true,
      Component: <Capm />
    },
    {
      text: "FuturesContractPayoff",
      path: "/math/FuturesContractPayoff",
      exact: true,
      Component: <FuturesContractPayoff />
    },
    {
      text: "OptionsContractPayoff",
      path: "/math/OptionsContractPayoff",
      exact: true,
      Component: <OptionsContractPayoff />
    },
    {
      text: "SwapPayoff",
      path: "/math/SwapPayoff",
      exact: true,
      Component: <SwapPayoff />
    },

    {
      text: "OptionPrice",
      path: "/math/OptionPrice",
      exact: true,
      Component: <OptionPrice />
    },

    {
      text: "ForwardExchangeRate",
      path: "/math/ForwardExchangeRate",
      exact: true,
      Component: <ForwardExchangeRate />
    }
  ];

  return (
    <>
      <div> Functions And Models in Finance</div>
      <LinksAndRoutes data={linksAndRoutes} />
    </>
  );
}
export default ModelsinFinance;

function PresentValue() {
  return (
    <div>
      <h2>PresentValue</h2>
    </div>
  );
}

function Capm() {
  return (
    <div>
      <h2>Capm</h2>
    </div>
  );
}

function FuturesContractPayoff() {
  return (
    <div>
      <h2>FuturesContractPayoff</h2>
    </div>
  );
}

function OptionsContractPayoff() {
  return (
    <div>
      <h2>OptionsContractPayoff</h2>
    </div>
  );
}

function SwapPayoff() {
  return (
    <div>
      <h2>SwapPayoff</h2>
    </div>
  );
}

function OptionPrice() {
  return (
    <div>
      <h2>OptionPrice</h2>
    </div>
  );
}

function ForwardExchangeRate() {
  return (
    <div>
      <h2>ForwardExchangeRate</h2>
    </div>
  );
}
