import React, { Component } from "react";
import { getUser } from "../graphql/queries";
import NewBlog from "../components/blog_components/NewBlog";


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
        {/*<MyEditor />*/}
        <NewBlog />
      </>
    );
  }
}

export default ProfilePage;