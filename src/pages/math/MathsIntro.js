import React, { useEffect, useState } from "react";
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
// }));
import Geogebra from "react-geogebra";

function MathsIntro() {
  // const classes = useStyles();
  const [message, setMessage] = useState();
  function onChivron() {
    //window.history.back();
    window
      .GGBApplet(
        {
          id: "appId",
          appName: "graphing",
          material_id: "AK2TZQtW",
          width: 600,
          height: 400,
          enableUndoRedo: false
        },
        true
      )
      .inject("appId");
  }

  return (
    <>
      <div>This is a Basic Math Home Page</div>
      <button
        className="mdc-button foo-button"
        title="back"
        onClick={onChivron}
      >
        <div className="mdc-button__ripple"></div>
        <span className="material-icons">chevron_left</span>
      </button>

      <Geogebra
        id="appId"
        appName="graphing"
        material_id="cqvszdes"
        width="600"
        height="400"
        enableUndoRedo="false"
        appletOnLoad={() => setMessage("loaded")}
      />
    </>
  );
}

export default MathsIntro;
