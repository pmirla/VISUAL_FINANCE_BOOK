import React from "react";
import { useHistory } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

const LinksAndRoutes = ({ data }) => {
  return (
    <>
      <Router>
        <div>
          <ul>
            {data.map((page) => (
              <li key={page.text}>
                <Link to={page.path}>{page.text} </Link>
              </li>
            ))}
          </ul>
          <hr />
          <Switch>
            {data.map((page) => (
              <Route
                key={page.text}
                path={page.path}
                render={(props) => (
                  <ProtectedRoute> {page.Component} </ProtectedRoute>
                )}
              />
            ))}
          </Switch>
        </div>
      </Router>
    </>
  );
};
export default LinksAndRoutes;
