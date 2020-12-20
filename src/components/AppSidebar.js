import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth
  },
  listItem: {
    color: theme.palette.grey.main,
    borderBottom: "2px solid transparent",
    "&.Mui-selected": {
      borderColor: theme.palette.secondary.main,
      color: theme.palette.primary.main
    }
  },
  listItemIcon: {
    color: "inherit"
  },
  listItemText: {
    fontWeight: 500
  }
}));

function AppSidebar(props) {
  const classes = useStyles();

  const { pathname } = props.location;
  const [, pageGroup] = pathname.split("/");
  let pages = [];

  try {
    pages = require(`../pages/${pageGroup}`).default();
  } catch (err) {
    console.log(err);
  }

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{ paper: classes.drawerPaper }}
      anchor="left"
    >
      <List>
        {pages
          .filter((page) => page.text)
          .map((page) => (
            <ListItem
              button
              key={page.text}
              onClick={() => props.history.push(page.path)}
              selected={pathname === page.path}
              className={classes.listItem}
            >
              <ListItemIcon className={classes.listItemIcon}>
                <page.Icon />
              </ListItemIcon>
              <ListItemText
                primary={page.text}
                primaryTypographyProps={{ className: classes.listItemText }}
              />
            </ListItem>
          ))}
      </List>
    </Drawer>
  );
}

export default withRouter(AppSidebar);
