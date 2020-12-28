import React, { useContext } from "react";
import { firebaseAuth } from "../../provider/AuthProvider";
import { useHistory, Link, Redirect } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { token } = useContext(firebaseAuth);
  const history = useHistory();
  function handleClick() {
    // history.push("/home/Account/");
    history.push("/home");
  }
  return (
    <>
      {token ? (
        <>
          <div>
            This is protected Route
            {props.children}
          </div>
        </>
      ) : (
        <>
          "Not logged in "
          <button type="button" onClick={handleClick}>
            Go SignIn or SignUp
          </button>
        </>
      )}
    </>
  );
};
export default ProtectedRoute;
