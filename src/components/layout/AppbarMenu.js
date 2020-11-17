import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import {handleSignOut} from "../../utils";
import {Link} from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AppBar from "@material-ui/core/AppBar";

const TestAppbarMenu = (props) => {
  const { classes, title, handleDrawerOpen, open, theme, position, shiftClass } = props;

  return (
    <>
      <AppBar color={"transparent"} position={position} className={shiftClass}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Button size={"small"}>Subscribe</Button>
          <Typography
            component={"h2"}
            variant={"h5"}
            color={"inherit"}
            align={"center"}
            noWrap
            className={classes.toolbarTitle}
          >
            {title}
          </Typography>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Button
            variant={"outlined"}
            size={"small"}
            onClick={() => handleSignOut()}
          >
            Sign Out
          </Button>
          <IconButton component={Link} to={"/profile"}>
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
        {/*<Toolbar*/}
        {/*  component={"nav"}*/}
        {/*  variant={"dense"}*/}
        {/*  className={classes.toolbarSecondary}*/}
        {/*>*/}
        {/*  <Link>NavItem-1</Link>*/}
        {/*  <Link>NavItem-2</Link>*/}
        {/*  <Link>NavItem-3</Link>*/}
        {/*  <Link>NavItem-4</Link>*/}
        {/*  <Link>NavItem-5</Link>*/}
        {/*</Toolbar>*/}
      </AppBar>
    </>
  );
};

export default TestAppbarMenu;
