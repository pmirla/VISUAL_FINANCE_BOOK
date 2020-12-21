import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

// import FoodXLogo from '../assets/FoodXLogo.png';

const useStyles = makeStyles((theme) => ({
  imgWrapper: {
    display: "flex",
    flexGrow: 1
  },
  list: {
    display: "flex",
    flexGrow: 1
  },
  listItem: {
    marginRight: "0.5em",
    maxWidth: "20em",
    border: "2px solid #fff",
    opacity: 0.4,
    textTransform: "uppercase",
    fontWeight: 600,
    "&.Mui-selected": {
      opacity: 1
    }
  },
  listItemText: {
    whiteSpace: "nowrap",
    textAlign: "center"
  }
}));

function AppHeader(props) {
  const classes = useStyles();
  const [, pageGroup] = props.location.pathname.split("/");

  const items = [
    { text: "Financial Mathematics", path: "/math" },
    { text: "Statistics", path: "/stats" }

  ];

  return (
    <AppBar position="relative" elevation={0}>
      <Toolbar>
        <div className={classes.imgWrapper}>
          {/* <img src={FoodXLogo} alt="FoodX Logo" height="60px" /> */}
        </div>

        <List className={classes.list}>
          {items.map((item) => (
            <ListItem
              button
              key={item.text}
              className={classes.listItem}
              onClick={() => props.history.push(item.path)}
              selected={`/${pageGroup}` === item.path}
            >
              <ListItemText
                className={classes.listItemText}
                primary={item.text}
              />
            </ListItem>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  );
}

export default withRouter(AppHeader);
