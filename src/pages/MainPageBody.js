import React from "react";
import MainFeaturedArticle from "../components/article_components/MainFeaturedArticle";
import Grid from "@material-ui/core/Grid";
import FeaturedArticle from "../components/article_components/FeaturedArticle";
import Main from "../components/layout/Main";
import Sidebar from "../components/layout/Sidebar";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import article1 from "./markdown/blog-article.1.md";
import article2 from "./markdown/blog-article.2.md";
import article3 from "./markdown/blog-article.3.md";
import {makeStyles} from "@material-ui/core";
import "../img/logo_transparent_background.png";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const mainFeaturedArticle = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const articles = [article1, article2, article3];

const featuredArticles = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Article title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function MainPageBody() {
  const classes = useStyles();
  // const { classes, sidebar, articles, mainFeaturedArticle, featuredArticles } = props;
  return (
    <>
      <MainFeaturedArticle article={mainFeaturedArticle} />
      <Grid container spacing={4}>
        {featuredArticles.map((article) => (
          <FeaturedArticle key={article.title} article={article} />
        ))}
      </Grid>
      <Grid container spacing={5} className={classes.mainGrid}>
        <Main title={"From the firehose"} articles={articles} />
        <Sidebar
          title={sidebar.title}
          description={sidebar.description}
          archives={sidebar.archives}
          social={sidebar.social}
        />
      </Grid>
    </>
  );
}
