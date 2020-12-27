import React, { useContext } from "react";
import { firebaseAuth } from "../../provider/AuthProvider";

const ProtectedRoute = (props) => {
  const { token } = useContext(firebaseAuth);
  debugger;
  return (
    <>
      {token ? (
        <>
          <div>
            This is protected Route
            {props.children}
          </div>{" "}
        </>
      ) : (
        "Not logged in "
      )}
    </>
  );
};
export default ProtectedRoute;
