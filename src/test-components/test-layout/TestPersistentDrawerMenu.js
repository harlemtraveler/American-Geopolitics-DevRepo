import React from 'react';
import {createMuiTheme, makeStyles, ThemeProvider, useTheme} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import TestAppbarMenu from "./TestAppbarMenu";
import TestDrawerMenu from "./TestDrawerMenu";
import clsx from "clsx";

const drawerWidth = 240;

const themeFont = createMuiTheme({
  typography: {
    fontFamily: [
      "merriweather",
    ]
  },
});

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

const TestPersistentDrawerMenu = childComponent => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

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
      <TestAppbarMenu
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
      <TestDrawerMenu
        classes={classes}
        theme={theme}
        open={open}
        handleDrawerClose={handleDrawerClose}
      />

      {/* Page Main Body */}
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      {/* Insert Main Body Here */}
        {childComponent}
      </main>
      </ThemeProvider>
    </>
  );
};

export default TestPersistentDrawerMenu(childComponent);
