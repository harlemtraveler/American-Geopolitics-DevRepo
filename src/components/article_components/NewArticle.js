import React, { Component } from "react";
import { UserContext } from "../../App";
import { API, graphqlOperation } from "aws-amplify";
import { PhotoPicker } from "aws-amplify-react";
import { createArticle } from "../../graphql/mutations";

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AlertSnackbar from "../../utils/Alert";

const initialState = {
    name: "",
    title: "",
    subtitle: "",
    body: "",
    url: "",
    imagePreview: "",
    image: "",
    options: [],
    selectedTags: [],
    addArticleDialog: false,
    isUploading: false,
    tags: [
      "US",
      "World",
      "Politics",
      "Business",
      "Tech",
      "Security",
      "Opinion",
      "Health",
      "Entertainment",
      "Style",
      "Travel",
      "Sports",
      "Videos"
    ]
  };

class NewArticle extends Component {
  state = { ...initialState };

  handleAddArticle = async () => {
    console.log(this.state.title);
    console.log(this.state.subtitle);
    console.log(this.state.body);
    try {
      this.setState({ addMarketDialog: false });
      const input = {
        blogID: this.props.blogId,
        title: this.state.title,
        sub_title: this.state.subtitle,
        body: this.state.body,
        url: this.state.url,
        tags: this.state.selectedTags
      };
      const result = await API.graphql(graphqlOperation(createArticle, { input }));
      console.log(result);
      console.info(`Created article id: ${result.data.createArticle.id}`);
      this.setState({ ...initialState });
      setTimeout(() => window.location.reload(), 2000);
    } catch (err) {
      console.error("[!] Error adding new article", err);
    }
  };

  handleClickOpen = () => {
    this.setState({ addArticleDialog: true });
  };

  handleClose = () => {
    this.setState({ addArticleDialog: false });
    this.setState({ name: "", title: "", subtitle: "", body: "", url: "", imagePreview: "", selectedTags: [] });
  };

  handleChange = event => {
    event.preventDefault();
    const targetName = event.target.name;
    const targetValue = event.target.value;
    this.setState({
      ...targetName,
      [targetName]: targetValue
    });
  };

  handleFilterTags = query => {
    const options = this.state.tags
      .map(tag => ({ value: tag, label: tag }))
      .filter(tag => tag.label.toLowerCase().includes(query.toLowerCase()));
    this.setState({ options });
  };

  render() {
    const { addArticleDialog, tags, selectedTags, options, name, title, subtitle, body, url, imagePreview } = this.state;
    const { classes, blogId } = this.props;

    return (
      <UserContext.Consumer>
        {({ user }) => <>

          <Grid
            container
            spacing={3}
            justify={"center"}
            alignItems={"center"}
            alignContent={"center"}
            direction={"row"}
          >
            <Grid item xs={12}>
              <Paper style={{height: "16em"}}>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen} style={{margin: "40px"}}>
                  Add New Article
                </Button>
              </Paper>
            </Grid>
          </Grid>


          <Dialog
            open={addArticleDialog}
            onClose={this.handleClose}
            aria-labelledby={"form-dialog-title"}
            maxWidth={"sm"}
            fullWidth
          >
            <DialogTitle id="form-dialog-title">New Article</DialogTitle>
            <DialogContent className={classes.root}>
              {/*<DialogContentText></DialogContentText>*/}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <Box>
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt={"Product Preview"}
                    className={"image-preview"}
                  />
                )}
                <PhotoPicker
                  title={"Product Image"}
                  preview={"hidden"}
                  onLoad={photoUrl => this.setState({ imagePreview: photoUrl })}
                  onPick={file => this.setState({ image: file })}
                  theme={{
                    formContainer: {
                      margin: 0,
                      padding: "0.8em"
                    },
                    sectionBody: {
                      margin: 0,
                      width: "250px"
                    },
                    formSection: {
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center"
                    },
                    sectionHeader: {
                      padding: "0.2em",
                      color: "var(--darkAmazonOrange)"
                    },
                    amplifyButton: {
                      display: "none"
                    }
                  }}
                />
              </Box>

              <FormControl className={classes.formControl}>
                <InputLabel id={"category-tags"}>Tags</InputLabel>
                <Select
                  id={"addTags"}
                  multiple
                  labelId={"addTags"}
                  value={selectedTags}
                  name={"selectedTags"}
                  onChange={this.handleChange}
                >
                  {/*  */}
                  <MenuItem value={""} />
                  {tags.map(tag => (
                    <MenuItem key={tag} value={tag}>{tag}</MenuItem>
                  ))}
                </Select>
              </FormControl>


              {/*<FormControl className={classes.formControl}>*/}
              {/*  <InputLabel id={"category-tags"}>Tags</InputLabel>*/}
              {/*  <Select*/}
              {/*    id={"add-tags"}*/}
              {/*    labelId={"add-tags"}*/}
              {/*    value={selectedTags}*/}
              {/*    onChange={selectedTags => this.setState({ selectedTags })}*/}
              {/*  >*/}
              {/*    {tags.map((tag) => (*/}
              {/*      <MenuItem key={tag} value={tag}>*/}
              {/*        {tag}*/}
              {/*      </MenuItem>*/}
              {/*    ))}*/}
              {/*  </Select>*/}
              {/*</FormControl>*/}
            </DialogContent>
            <DialogActions>
              <Button color={"primary"} onClick={this.handleClose}>Cancel</Button>
              <Button
                disabled={!title || !body}
                color={"primary"}
                onClick={this.handleAddArticle}
              >
                Submit
              </Button>
            </DialogActions>
          </Dialog>
        </>}
      </UserContext.Consumer>
    );
  }
}

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
});

export default withStyles(styles)(NewArticle);