import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

export default function FeaturedArticle(props) {
  const classes = useStyles();
  const { article } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component={"a"} href={"#"}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component={"h2"} variant={"h5"}>
                {article.title}
              </Typography>
              <Typography variant={"subtitle1"} color={"textSecondary"}>
                {article.date}
              </Typography>
              <Typography variant={"subtitle1"}>
                {article.description}
              </Typography>
              <Typography variant={"subtitle1"}>
                Continue reading...
              </Typography>
            </CardContent>
          </div>
          <Hidden smDown>
            <CardMedia
              className={classes.cardMedia}
              image={article.image}
              title={article.imageText}
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}