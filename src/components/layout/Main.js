import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
// Component Imports
import Markdown from './Markdown';

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const { articles, title } = props;

  return (
    <Grid item xs={12} md={8}>
      <Typography variant={"h6"} gutterBottom>
        {title}
      </Typography>
      <Divider />
      {articles.map((article) => (
        <Markdown className={classes.markdown} key={article.substring(0, 40)}>
          {article}
        </Markdown>
      ))}
    </Grid>
  );
}