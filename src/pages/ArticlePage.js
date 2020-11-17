import React, { Component } from "react";
import Article from "../components/Article";
import Container from "@material-ui/core/Container";
import { grey } from "@material-ui/core/colors";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: "0 auto",
  },
  // container: {
  //   backgroundColor: grey[300],
  // },
}));

export default function ArticlePage() {
  const classes = useStyles();

  return (
    <>
      <Article />

    </>
  );
}

