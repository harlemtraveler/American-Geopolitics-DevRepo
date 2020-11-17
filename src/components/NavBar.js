import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, Toolbar, Button, IconButton, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));




const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={"classes.root"}>
      <AppBar poisition={"sticky"} className={classes.appBar} style={{ backgroundColor: "#ed3725" }}>
        <Toolbar>
          <IconButton edge={"start"} className={classes.menuButton} color={"inherit"} aria-label={"american geopolitics"}>
            <MenuIcon />
          </IconButton>
          <Typography variant={"h6"} className={classes.title}>
            American Geopolitics
          </Typography>
          <Button color={"inherit"}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;