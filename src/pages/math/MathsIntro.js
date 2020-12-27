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
      <div>This is a Math Home Page</div>
    </>
  );
}

export default MathsIntro;
