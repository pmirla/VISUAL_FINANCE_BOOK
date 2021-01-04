import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  useParams
} from "react-router-dom";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";

import theme from "./theme";

import AppHeader from "./components/AppHeader";
import AppSidebar from "./components/AppSidebar";

import getBasicHomePages from "./pages/home";
import getBasicMathPages from "./pages/math";
import getBasicStatsPages from "./pages/stats";

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

  const pages = [
    ...getBasicHomePages(),
    ...getBasicMathPages(),
    ...getBasicStatsPages()
  ];

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
                <Route path="/galley" children={<Modal />} />
                <Redirect path="/" to="/home/" />
              </Switch>
            </div>
          </main>
        </Router>
      </div>
    </ThemeProvider>
  );
}

function Modal() {
  let history = useHistory();
  let { id } = useParams();
  const IMAGES = [
    { id: 0, title: "Dark Orchid", color: "DarkOrchid" },
    { id: 1, title: "Lime Green", color: "LimeGreen" },
    { id: 2, title: "Tomato", color: "Tomato" },
    { id: 3, title: "Seven Ate Nine", color: "#789" },
    { id: 4, title: "Crimson", color: "Crimson" }
  ];
  let image = IMAGES[parseInt(id, 10)];

  if (!image) return null;

  let back = (e) => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <div
      onClick={back}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: "rgba(0, 0, 0, 0.15)"
      }}
    >
      <div
        className="modal"
        style={{
          position: "absolute",
          background: "#fff",
          top: 25,
          left: "10%",
          right: "10%",
          padding: 15,
          border: "2px solid #444"
        }}
      >
        <h1>{image.title}</h1>
        <Image color={image.color} />
        <button type="button" onClick={back}>
          Close
        </button>
      </div>
    </div>
  );
}
function Image({ color }) {
  return (
    <div
      style={{
        width: "100%",
        height: 400,
        background: color
      }}
    />
  );
}

export default App;
