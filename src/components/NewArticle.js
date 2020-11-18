import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class NewArticle extends Component {
  state = {
    name: "",
    options: [],
    selectedTags: [],
    addArticleDialog: false,
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

  handleClickOpen = () => {
    this.setState({ addArticleDialog: true });
  };

  handleClose = () => {
    this.setState({ addArticleDialog: false });
  };

  render() {
    const { addArticleDialog } = this.state;

    return (
      <>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Add New Article
        </Button>
        <Dialog open={addArticleDialog} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">New Article</DialogTitle>
          <DialogContent>
            <DialogContentText></DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Title"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button color={"primary"} onClick={this.handleClose}>Cancel</Button>
            <Button color={"primary"} onClick={this.handleClose}>Submit</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

export default NewArticle;