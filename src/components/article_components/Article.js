import React, {useState} from 'react';
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

import { S3Image } from "aws-amplify-react";
import { API, graphqlOperation } from "aws-amplify";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { updateArticle, deleteArticle } from "../../graphql/mutations";
import { convertCentsToDollars, convertDollarsToCents } from "../../utils/index";
import { formatProductDate, formatDateToISO } from "../../utils/index";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  responsive: {
    [theme.breakpoints.up('xs')]: {
      maxHeight: 200,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    [theme.breakpoints.down('xs')]: {
      maxHeight: 200,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
  },
  title: {
    [theme.breakpoints.up('xs')]: {
      maxHeight: 40,
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    [theme.breakpoints.down('xs')]: {
      maxHeight: 40,
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
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

export default function Article({ article }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [liked, setLiked] = React.useState(false);
  const [shared, setShared] = React.useState(false);

  const [updateArticleDialog, setUpdateArticleDialog] = useState(false);
  const [deleteArticleDialog, setDeleteArticleDialog] = useState(false);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [body, setBody] = useState("");
  const [url, setUrl] = useState("");

  const handleUpdateArticle = async articleId => {
    try {
      setUpdateArticleDialog(false);
      const input = {
        id: articleId,
        title,
        subtitle,
        body,
        url
      };
      const result = await API.graphql(graphqlOperation(updateArticle, { input }));
      console.log(result);
      setTimeout(() => window.location.reload(), 2000);
    } catch (err) {
      console.error(`Failed to update article with id: ${articleId}`, err);
    }
  };

  const handleDeleteArticle = async articleId => {
    try {
      setDeleteArticleDialog(false);
      const input = {
        id: articleId
      };
      await API.graphql(graphqlOperation(deleteArticle, { input }));
      setTimeout(() => window.location.reload(), 2000);
    } catch (err) {
      console.error(`Failed to delete article with id: ${articleId}`, err);
    }
  };

  const getFormatArticleDate = date => {
    const formatDate = formatDateToISO(date);
    return formatProductDate(formatDate);
  };

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
    // <UserContext.Consumer>
    //   {({ user }) => {
    //     const isArticleOwner = user && user.sub === article.owner;
        <>
          <Card className={classes.root}>
            <CardHeader
              title={article.title}
              subheader={getFormatArticleDate(article.createdAt)}
              classes={{
                title: classes.title,
              }}
              avatar={
                <Avatar className={classes.avatar} aria-label={"user avatar"}>U</Avatar>
              }
              action={
                <IconButton aria-label={"settings"}>
                  <MoreVertIcon/>
                </IconButton>
              }
            />
            <CardMedia
              title={"Article Image"}
              className={classes.media}
              image={"https://source.unsplash.com/random"}
              // image={() => (
              //   <S3Image
              //     imgKey={article.file.key}
              //     theme={{
              //       photoImg: { maxWidth: "100%", maxHeight: "100%" }
              //     }}
              //   />
              // )}
            />
            <CardContent>
              <Typography variant={"body1"}>
                <Typography paragraph className={classes.responsive}>
                  {article.body}
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

          {/*<div className={"text-center"}>*/}
          {/*  {isArticleOwner}*/}
          {/*</div>*/}
        </>
    //   }}
    // </UserContext.Consumer>
  );
}