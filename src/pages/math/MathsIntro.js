import React, { useContext } from "react";
import MindMap from "../../components/common/MindMap";
// import { makeStyles } from '@material-ui/core/styles';
import { useHistory, Link, Redirect } from "react-router-dom";
import { firebaseAuth } from "../../provider/AuthProvider";

let flareJSON = require("../data/flare-2.json");

function MathsIntro() {
  const { token, inputs } = useContext(firebaseAuth);

  console.log(flareJSON);
  const history = useHistory();

  function handleClick() {
    // history.push("/home/Account/");
    history.push("/home/Account");
  }
  return (
    <>
      <div>This is a Math Home Page</div>

      {token ? (
        <>
          <div>Logged in as {inputs.email}</div>
        </>
      ) : (
        <>
          Not logged in
          <button type="button" onClick={handleClick}>
            Go SignIn or SignUp
          </button>
        </>
      )}

      <div className="my-app">
        <MindMap data={flareJSON} />
      </div>
    </>
  );
}

export default MathsIntro;
