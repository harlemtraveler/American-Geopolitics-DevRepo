import React, {Component} from 'react';
import { UserContext } from "../../App";
import { API, graphqlOperation } from "aws-amplify";
import { createBlog } from "../../graphql/mutations";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import { InputLabel } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";

class NewBlog extends Component {
  state = {
    name: "",
    addBlogDialog: false,
    options: [],
    selectedTags: [],
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

  handleAddBlog = async () => {
    console.log(this.state.name);
    try {
      this.setState({ addBlogDialog: false });
      const input = {
        name: this.state.name,
        tags: this.state.selectedTags
      };
      const result = await API.graphql(graphqlOperation(createBlog, { input }));
      console.log(result);
      console.info(`Created Blog id: ${result.data.createBlog.id}`);
      this.setState({ name: "" });
      setTimeout(() => window.location.reload(), 2000);
    } catch (err) {
      console.error("[!] Error adding new blog", err);
    }
  };

  handleClickOpen = () => {
    this.setState({ addBlogDialog: true });
  };

  handleClose = () => {
    this.setState({ addBlogDialog: false });
    this.setState({ name: "", title: "", subtitle: "", body: "", url: "", selectedTags: [] });
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

  render() {
    const { addBlogDialog, name, tags, selectedTags, options } = this.state;
    const { classes } = this.props;

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
              <Paper style={{height: "8em"}}>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen} style={{margin: "40px"}}>
                  Create New Blog
                </Button>
              </Paper>
            </Grid>
          </Grid>

          {/* Add Blog Dialog */}
          <Dialog
            open={addBlogDialog}
            onClose={this.handleClose}
            aria-labelledby={"form-dialog-title"}
            maxWidth={"sm"}
            fullWidth
          >
            <DialogTitle id="form-dialog-title">New Blog</DialogTitle>
            <DialogContent className={classes.root}>
              <TextField
                required
                autoFocus
                fullWidth
                id={"name"}
                value={name}
                name={"name"}
                label={"Name"}
                margin={"normal"}
                variant={"filled"}
                style={{margin: 8}}
                placeholder={"Blog Name"}
                onChange={this.handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
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
            </DialogContent>
            <DialogActions>
              <Button color={"primary"} onClick={this.handleClose}>Cancel</Button>
              <Button color={"primary"} onClick={this.handleAddBlog}>Submit</Button>
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
});

export default withStyles(styles)(NewBlog);