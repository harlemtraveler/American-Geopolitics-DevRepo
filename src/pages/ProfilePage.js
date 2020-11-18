import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Auth, API, graphqlOperation } from "aws-amplify";
import IconButton from '@material-ui/core/IconButton';
import Divider from "@material-ui/core/Divider";
import NoteAddOutlinedIcon from '@material-ui/icons/NoteAddOutlined';
import { getUser } from "../graphql/queries";
import NewArticle from "../components/NewArticle";
import MyEditor from "../components/editor/MyEditor";
import EditorClass from "../components/editor/EditorClass";

class ProfilePage extends Component {
  state = {
    email: this.props.user && this.props.user.email
  };

  componentDidMount() {
    if (this.props.user) {
      console.log(this.state.email);
    }
  }

  render() {
    const { user } = this.props;

    return (
      <>
          <div>ProfilePage</div>
          <Divider />
          {/*<NewArticle />*/}
          <h1>Draft.js Editor</h1>

          <MyEditor />
      </>
    );
  }
}

export default ProfilePage;