import React, { Component } from 'react'
import { getRepoList, TEST_TOKEN } from './RepoController'
import RepoItem from './RepoItem'

import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';


class RepoList extends Component {

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
