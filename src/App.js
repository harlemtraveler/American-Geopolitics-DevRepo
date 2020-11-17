import './App.css';
import clsx from "clsx";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Authenticator, AmplifyTheme, withAuthenticator } from "aws-amplify-react";
//**MaterialUI Imports**/
import CssBaseline from "@material-ui/core/CssBaseline";
import { withTheme, withStyles } from "@material-ui/core/styles";
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
//**Page Imports**/
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import ProfilePage from "./pages/ProfilePage";
import TestHomePage from "./test-components/TestHomePage";
//**Font Imports**/
import "fontsource-merriweather";
import "fontsource-libre-franklin";
//**Component Imports**/
import Article from "./components/Article";
import AppbarMenu from "./components/layout/AppbarMenu";
import DrawerMenu from "./components/layout/DrawerMenu";

// "#447fb7"
// "#2f587f"

class App extends React.Component {
  state = {
    user: null,
    menuOpen: false
  };

  componentDidMount() {
    // console.dir(AmplifyTheme);
  }

  handleDrawerOpen = () => {
    this.setState({ menuOpen: true });
  };

  handleDrawerClose = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    const { user, menuOpen } = this.state;
    const { classes } = this.props;

    return (
      <Router>
        <>
          <ThemeProvider theme={themeFont}>
            <CssBaseline />

            {/* Appbar */}
            <AppbarMenu
              classes={classes}
              title={"American Geopolitics"}
              handleDrawerOpen={this.handleDrawerOpen}
              open={menuOpen}
              position={"fixed"}
              shiftClass={clsx(classes.appBar, {
                [classes.appBarShift]: menuOpen,
              })}
            />

            {/* Drawer */}
            <DrawerMenu
              classes={classes}
              open={menuOpen}
              handleDrawerClose={this.handleDrawerClose}
            />

            {/* Page Main Body */}
            <main
              className={clsx(classes.content, {
                [classes.contentShift]: menuOpen,
              })}
            >
              <div className={classes.drawerHeader} />

              {/* Routes */}
              <div className="app-container">
                <Route exact path={"/"} component={HomePage} />
                <Route path={"/profile"} component={() => (
                  <ProfilePage user={user} />
                )} />
                <Route path={"/testhome"} component={TestHomePage} />
                <Route path={"/blog"} component={ArticlePage} />
              </div>

            </main>
          </ThemeProvider>
        </>
      </Router>
    );
  }
}

const drawerWidth = 240;

const themeFont = createMuiTheme({
  typography: {
    fontFamily: [
      "merriweather",
    ]
  },
});

const styles = theme => ({
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
});

const merriweather = createMuiTheme({
  typography: {
    fontFamily: "Merriweather"
  }
});

const libreFranklin = createMuiTheme({
  typography: {
    fontFamily: "Libre Franklin"
  }
});

const theme = {
  ...AmplifyTheme,
  button: {
    ...AmplifyTheme.button,
    backgroundColor: "#f9aa33"
  },
  formSection: {
    ...AmplifyTheme.formSection,
    padding: "25px"
  },
  formField: {
    ...AmplifyTheme.formField,
    padding: "5px"
  },
  sectionBody: {
    ...AmplifyTheme.sectionBody,
    padding: "25px"
  },
  sectionHeader: {
    ...AmplifyTheme.sectionHeader,
    backgroundColor: "#344955"
  }
};

// export default withAuthenticator(App, false, [], null, theme);
export default withStyles(styles)(App);