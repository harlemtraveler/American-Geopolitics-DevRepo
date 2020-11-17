import React from "react";
import { withStyles, makeStyles, CssBaseline, ThemeProvider } from "@material-ui/core";
// Material-UI Imports
import Container from '@material-ui/core/Container';
// Component Imports
import PersistentDrawerMenu from "./PersistentDrawerMenu";
import Footer from "../components/layout/Footer";
import {createMuiTheme} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  pageContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
}));


const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

const themeFont = createMuiTheme({
  typography: {
    fontFamily: [
      "merriweather",
    ]
  },
});

export default function TestHomePage(props) {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={themeFont}>
      <Container maxWidth={"xl"}>

        <PersistentDrawerMenu />

      </Container>
      <Footer
        title={"Footer"}
        description={"This is some super awesome footer text, no?"}
      />
      </ThemeProvider>
    </>
  );
}
