import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";

import theme from "./theme";

import AppHeader from "./components/AppHeader";
import AppSidebar from "./components/AppSidebar";

import getDeliveryPages from "./pages/delivery";
import getInboundPages from "./pages/inbound";
const useStyles = makeStyles((theme) => ({
  appRoot: {
    display: "flex",
    flexDirection: "column",
    height: "100vh"
  },
  appBody: {
    display: "flex",
    flexGrow: 1
  },
  sidebar: {
    flexShrink: 0
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

function App() {
  const classes = useStyles();

  const pages = [...getDeliveryPages(), ...getInboundPages()];

  return (
    <ThemeProvider theme={theme}>
      <div id="app" className={classes.appRoot}>
        <Router>
          <AppHeader />
          <main className={classes.appBody}>
            <AppSidebar className={classes.sidebar} />
            <div className={classes.content}>
              <Switch>
                {pages.map(({ path, exact, Component }) => (
                  <Route key={path} path={path} exact={exact}>
                    <Component />
                  </Route>
                ))}
                <Redirect path="/" to="/e-commerce" />
              </Switch>
            </div>
          </main>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
