import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import Signup from "../../components/common/Signup";
import Signin from "../../components/common/Signin";
import Home from "../../components/common/Home";
import { firebaseAuth } from "../../provider/AuthProvider";

function Account() {
  const { token } = useContext(firebaseAuth);
  console.log(token);
  return (
    <>
      This is Home
      {/* switch allows switching which components render.  */}
      <Switch>
        {/* route allows you to render by url path */}

        <Route
          exact
          path="/home/Account"
          render={(rProps) => (token === null ? <Signin /> : <Home />)}
        />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </>
  );
}

export default Account;
