import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
// import { searchBlogs } from "../../graphql/queries";
// MaterialUI Imports
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ClearIcon from '@material-ui/icons/Clear';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from '@material-ui/core/InputAdornment';
// Component Imports
import BlogList from "../blog_components/BlogList";
// import {Input} from "element-react";

const searchBlogs = /* GraphQL */ `
  query SearchBlogs(
    $filter: SearchableBlogFilterInput
    $sort: SearchableBlogSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchBlogs(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        owner
        tags
        articles {
          items {
            id
            blogID
            title
            sub_title
            preview
            body
            url
            tags
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;

class Main extends Component {
  state = {
    searchTerm: "",
    searchResults: [],
    isSearching: false
  };

  handleSearchChange = event => {
    event.preventDefault();

    const targetName = event.target.name;
    const targetValue = event.target.value;
    this.setState({
      ...targetName,
      [targetName]: targetValue
    });
  };

  handleClearSearch = () => this.setState({ searchTerm: "", searchResults: [] });

  handleSearch = async event => {
    try {
      event.preventDefault();

      this.setState({ isSearching: true });
      const result = await API.graphql(graphqlOperation(searchBlogs, {
        filter: {
          or: [
            { name: { match: this.state.searchTerm } },
            { owner: { match: this.state.searchTerm } },
            { tags: { match: this.state.searchTerm } }
          ]
        }
      }));
      console.log({ result });
      this.setState({
        searchResults: result.data.searchBlogs.items,
        isSearching: false
      });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    const { title } = this.props;

    return (
      <Grid item xs={12} md={8}>
        <Typography variant={"h6"} gutterBottom>
          {title}
        </Typography>

        <Divider />

        <FormControl fullWidth>
          <Input
            id="blog-search"
            label="Search Blogs"
            name={"searchTerm"}
            // type="search"
            value={this.state.searchTerm}
            placeholder={"Search Market..."}
            onChange={this.handleSearchChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={this.handleClearSearch} color={"inherit"}>
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            }
          />
          <Button
            variant={"contained"}
            loading={this.state.isSearching}
            onClick={this.handleSearch}
          >
            Search
          </Button>
        </FormControl>

        <BlogList searchResults={this.state.searchResults} />
      </Grid>
    );
  }
}

export default Main;