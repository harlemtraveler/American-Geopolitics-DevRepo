import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import { UserContext } from "../../App";
import { Link } from "react-router-dom";
import { S3Image } from "aws-amplify-react";
import { Storage, API, graphqlOperation } from "aws-amplify";
/*********************************
 * Material UI Component Imports *
**********************************/
import { makeStyles } from '@material-ui/core/styles';
import {red, grey, blue} from "@material-ui/core/colors";
// MUI Card Component
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// MUI Icon Component
import Avatar from '@material-ui/core/Avatar';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// MUI Menu Component
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Collapse from '@material-ui/core/Collapse';
import Typography from "@material-ui/core/Typography";
// MUI Dialog Component
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

import Button from "@material-ui/core/Button";
/************************************
 * GraphQL & Util Component Imports *
*************************************/
import { updateArticle, deleteArticle } from "../../graphql/mutations";
import { convertCentsToDollars, convertDollarsToCents } from "../../utils/index";
import { formatProductDate, formatDateToISO } from "../../utils/index";
import TextField from "@material-ui/core/TextField";

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
    height: 140,
    paddingTop: '56.25%', // 16:9
  },
  mediaS3Obj: {
    display: 'block',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    // height: "25 rem",
    // width: "25 rem",
    // height: "248",
    // width: "248"
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
  const onOpen = e => {
    setAnchorEl(e.currentTarget);
  };

  const onSettings = e => {
    handleDialogOpen();
    onClose(e);
  };

  const onClose = e => {
    if (e.currentTarget.textContent === "Source URL") {
      // console.log(`[!] Triggered function for : ${e.currentTarget.textContent}`);
      //  TODO: Add a trigger for tool to copy source url to clipboard
    }
    setAnchorEl(null);
  };

  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [body, setBody] = useState("");
  const [url, setUrl] = useState("");
  const [liked, setLiked] = useState(false);
  const [shared, setShared] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [updateArticleDialog, setUpdateArticleDialog] = useState(false);
  const [deleteArticleDialog, setDeleteArticleDialog] = useState(false);

  const [items, setItems] = useState([
    { name: "Source URL", onClick: onClose },
    { name: "Edit", onClick: onSettings, disabled: true },
    { name: "Delete", onClick: onClose, disabled: true }
  ]);


  const handleDialogOpen = () => {
    setUpdateArticleDialog(true);
  };

  const handleDialogClose = () => {
    setUpdateArticleDialog(false);
  };

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
    <UserContext.Consumer>
      {({ user }) => {
        const isArticleOwner = user && user.sub === article.owner;
        const isEmailVerified = user && user.email_verified;

        return (
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
                <>
                  <IconButton
                    aria-label={"settings"}
                    disabled={!isArticleOwner}
                    onClick={onOpen}
                  >
                    <MoreVertIcon/>
                  </IconButton>
                  <Menu
                    keepMounted
                    anchorEl={anchorEl}
                    onClose={onClose}
                    open={Boolean(anchorEl)}
                    id={"settings-menu"}
                  >
                    {items.map((item, index) => (
                      <MenuItem
                        key={index}
                        onClick={item.onClick}
                        disabled={
                          isArticleOwner ? false : item.disabled
                        }
                      >
                        {item.name}
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              }
            />
            <CardMedia
              title={"Article Image"}
              className={classes.media}
              // image={article.file.key}
              image={"https://source.unsplash.com/random"}
              // image={(() => (
              //   <S3Image
              //     imgKey={article.file.key}
              //     theme={{
              //       photoImg: { maxWidth: "100%", maxHeight: "100%" }
              //     }}
              //   />
              // ))}
            />
            {/* TODO: Find a way to elegantly integrate the S3Image or CardMedia component with Article's image */}
            {/*<div className={classes.mediaS3Obj}>*/}
            {/*  <S3Image*/}
            {/*    imgKey={article.file.key}*/}
            {/*    // className={classes.mediaS3Obj}*/}
            {/*    theme={{*/}
            {/*      photoImg: { maxWidth: "100%", maxHeight: "100%" }*/}
            {/*    }}*/}
            {/*  />*/}
            {/*</div>*/}
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

          {/* Update Article Dialog */}
          <Dialog
            fullWidth
            maxWidth={"sm"}
            open={updateArticleDialog}
            onClose={handleDialogClose}
            aria-labelledby={"update-article-dialog"}
          >
            <DialogTitle id={"update-article-dialog-title"}>Update Article</DialogTitle>
            <DialogContent>
              <TextField
                required
                autoFocus
                fullWidth
                id={"title"}
                value={title}
                name={"title"}
                label={"Title"}
                margin={"normal"}
                variant={"filled"}
                style={{margin: 8}}
                placeholder={"Article Title"}
                onChange={e => setTitle(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                fullWidth
                value={subtitle}
                id={"subtitle"}
                name={"subtitle"}
                margin={"normal"}
                variant={"filled"}
                label={"Subtitle"}
                style={{margin: 8}}
                placeholder={"Article Sub-title"}
                onChange={e => setSubtitle(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                required
                fullWidth
                id={"body"}
                value={body}
                name={"body"}
                multiline={true}
                margin={"normal"}
                variant={"filled"}
                style={{margin: 8}}
                label={"Article Body"}
                onChange={e => setBody(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                fullWidth
                value={url}
                type={"url"}
                name={"url"}
                label={"URL"}
                margin={"normal"}
                variant={"filled"}
                id={"article-url"}
                style={{margin: 8}}
                onChange={e => setUrl(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </DialogContent>
            <DialogActions>
              <Button color={"secondary"} onClick={handleDialogClose}>Cancel</Button>
              <Button color={"primary"} onClick={handleUpdateArticle}>Update</Button>
            </DialogActions>
          </Dialog>

        </>
        );
      }}
    </UserContext.Consumer>
  );
}