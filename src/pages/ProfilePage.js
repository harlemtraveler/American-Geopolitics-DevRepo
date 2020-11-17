import React, { Component } from "react";
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import NoteAddOutlinedIcon from '@material-ui/icons/NoteAddOutlined';

class ProfilePage extends Component {
  state = {};

  render() {
    const { user } = this.props;

    return (
      <>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>ProfilePage</div>
          <IconButton component={Link} to={""}>
            <NoteAddOutlinedIcon />
          </IconButton>
        </div>
      </>
    );
  }
}

export default ProfilePage;