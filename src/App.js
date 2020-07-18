import React, {Component} from 'react';
import RepoList from './repository/RepoList'
import Dashboard from "./dashboard/Dashboard";
import './App.css';

import SignIn from "./login/SignIn";

const PAGE_LOGIN = "page_login";
const PAGE_REPOS = "page_repositories";
const PAGE_DASHBOARD = "page_dashboard";

class App extends Component {

  constructor() {
    super()
    // this.setPage = this.setPage.bind(this);
    this.state = {
      pages: [],
      // currentPage: "page_repositories"
      currentPage: PAGE_LOGIN,
      currentRepo: "",
      user: "",
      token: ""
    }
  }

  setCurrentPage(page) {
    this.setState({ currentPage: page });
  }

  setCurrentRepo(repo) {
    this.setState({ currentRepo: repo });
  }

  login(userData) {
    this.setState({
      currentPage: PAGE_REPOS,
      user: userData.username,
      token: userData.token
    });
  }

  logout() {
    this.setState({
      currentPage: PAGE_LOGIN,
      currentRepo: "",
      user: "",
      token: ""
    });
  }

  pager(page) {
    switch (page) {
      case PAGE_LOGIN:
        return <SignIn onLogin={(userData) => {
          this.login(userData);
          this.setCurrentPage(PAGE_REPOS);
        }}/>

      case PAGE_REPOS:
        return <RepoList
            token={this.state.token}
            onSelect={(repo) => {
              this.setCurrentRepo(repo)
              this.setCurrentPage(PAGE_DASHBOARD);
            }}
              onLogout={() => this.logout()}
            />

      case PAGE_DASHBOARD:
        return <Dashboard
            repo={this.state.currentRepo}
            user={this.state.user}
            token={this.state.token}
            onSelectRepo={() => {
              this.setCurrentRepo("")
              this.setCurrentPage(PAGE_REPOS)
            }}
            onLogout={() => this.logout()}
        />
    }
  }

  render() {
    return (
        <div className="App">
          {this.pager(this.state.currentPage)}
        </div>
    )
  }
}
export default App
