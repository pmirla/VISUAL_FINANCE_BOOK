import React, { useEffect, useState } from "react";
import MindMap from "../../components/common/MindMap";
// import { makeStyles } from '@material-ui/core/styles';
let flareJSON = require("../data/flare-2.json");

function MathsIntro() {
  console.log(flareJSON);
  return (
    <>
      <div>This is a Math Home Page</div>
      <div className="my-app">
        <MindMap data={flareJSON} />
      </div>
    </>
  );
}

export default MathsIntro;
