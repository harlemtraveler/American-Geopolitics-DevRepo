import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import {red, grey, blue} from "@material-ui/core/colors";
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography from "@material-ui/core/Typography";
import Collapse from '@material-ui/core/Collapse';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  iconUnlike: {
    color: grey[700],
  },
  iconLiked: {
    color: red[700],
  },
  iconUnshared: {
    color: grey[700],
  },
  iconShared: {
    color: blue[700],
  },
}));

export default function Article() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [liked, setLiked] = React.useState(false);
  const [shared, setShared] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleShare = () => {
    setShared(!shared);
  };

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          title={"Article Title"}
          subheader={"November 13, 2020"}
          avatar={
            <Avatar className={classes.avatar} aria-label={"user avatar"}>U</Avatar>
          }
          action={
            <IconButton aria-label={"settings"}>
              <MoreVertIcon />
            </IconButton>
          }
        />
        <CardMedia
          title={"Article Image"}
          className={classes.media}
          image={"https://source.unsplash.com/random"}
        />
        <CardContent>
          <Typography variant={"body1"}>
            <Typography paragraph>
              This blog post shows a few different types of content that are supported and styled
              with Material styles. Basic typography, images, and code are all supported. You can
              extend these by modifying `Markdown.js`.
            </Typography>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label={"like"}>
            <FavoriteIcon
              onClick={handleLike}
              className={clsx(classes.iconUnlike, {
                [classes.iconLiked]: liked
              })}
            />
          </IconButton>
          <IconButton aria-label={"share"}>
            <ShareIcon
              onClick={handleShare}
              className={clsx(classes.iconUnshared, {
                [classes.iconShared]: shared
              })}
            />
          </IconButton>
          <IconButton
            aria-label={"show more"}
            aria-expanded={expanded}
            onClick={handleExpandClick}
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout={"auto"} unmountOnExit>
          <CardContent>
            <Typography>
              <Typography paragraph>
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed
                posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.
              </Typography>
              <Typography paragraph>
                Curabitur blandit tempus porttitor. **Nullam quis risus eget urna mollis** ornare vel
                eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
              </Typography>
              <Typography paragraph>
                Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet
                fermentum. Aenean lacinia bibendum nulla sed consectetur.
              </Typography>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}