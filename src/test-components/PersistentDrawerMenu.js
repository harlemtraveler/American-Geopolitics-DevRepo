import React, { useState  } from 'react';
import { Link } from "react-router-dom";
import clsx from "clsx";
import "fontsource-merriweather";
import "fontsource-libre-franklin";
//**MaterialUI Imports**/
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from "@material-ui/icons/Mail";
import Toolbar from '@material-ui/core/Toolbar';
import Divider from "@material-ui/core/Divider";
import ListItem from '@material-ui/core/ListItem';
import SearchIcon from "@material-ui/icons/Search";
import MainPageBody from "../pages/MainPageBody";
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InboxIcon from "@material-ui/icons/MoveToInbox";
import CssBaseline from "@material-ui/core/CssBaseline";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { makeStyles, useTheme, withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
//**Util Imports**/
import { handleSignOut } from "../utils";
//**Component Imports**/
import ArticlePage from "../pages/ArticlePage";
import DrawerMenuContent from "./test-layout/DrawerMenuContent";
import AppbarMenuContent from "./test-layout/AppbarMenuContent";


const drawerWidth = 240;

const themeFont = createMuiTheme({
  typography: {
    fontFamily: [
      "merriweather",
    ]
  },
});

// MaterialUI Persistent Drawer Styling
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    // zIndex: theme.zIndex.drawer + 1,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

const AppbarMenu = (props) => {
  const { classes, title, handleDrawerOpen, open, theme, position, shiftClass } = props;

  return (
    <>
      <AppbarMenuContent
        classes={classes}
        theme={theme}
        title={"American Geopolitics"}
        handleDrawerOpen={handleDrawerOpen}
        open={open}
        position={position}
        shiftClass={shiftClass}
      />
    </>
  );
};

const DrawerMenu = (props) => {
  const { classes, open, onClose, handleDrawerClose, theme } = props;

  return (
    <>
      <Drawer
        className={classes.drawer}
        variant={"persistent"}
        anchor={"left"}
        open={open}
        onClose={onClose}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <Toolbar />
        <div className={classes.drawerContainer}>
          <DrawerMenuContent />
        </div>
      </Drawer>
    </>
  );
};


export default function PersistentDrawerMenu(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  // const { articles, sidebar, featuredArticles, mainFeaturedArticle, MainHomePageContent } = props;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={themeFont}>
      {/* AppBar */}
      <AppbarMenu
        classes={classes}
        theme={theme}
        title={"American Geopolitics"}
        handleDrawerOpen={handleDrawerOpen}
        open={open}
        position={"fixed"}
        shiftClass={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      />
      {/* Drawer */}
      <DrawerMenu
        classes={classes}
        theme={theme}
        open={open}
        handleDrawerClose={handleDrawerClose}
      />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {/* TODO: Import Page Content Here! */}

        {/*<MainPageBody />*/}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ArticlePage />
        </div>

      </main>
      </ThemeProvider>
    </>
  );
}

// export default PersistentDrawerMenu();

// Color Hex Codes:
// "#344955"
// "#232F34"
// "#4A6572"
// "#F9AA33"
