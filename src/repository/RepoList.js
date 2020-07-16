import React, { Component } from 'react'
import { getRepoList } from './RepoController'
import RepoItem from './RepoItem'
import Config from "../config";

import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';


class RepoList extends Component {
  TEST_TOKEN = Config.TEST_TOKEN;

  constructor() {
    super()
    this.state = {
      repos: [],
    }
  }

  componentDidMount() {
    getRepoList(TEST_TOKEN).then((data) => {
      console.log(data);
      this.setState({ repos: data });
    })
  }

  render() {
    return (
      <div>
        <Typography variant="h6">
            Avatar with text and icon
          </Typography>
          <div>
            <List dense>
              { 
              this.state.repos.map((item) => {
                return (
                  <RepoItem item={item}/>
                );
              }) 
              }
            </List>
          </div>
      </div>
    );
  }
}

export default RepoList
