import React, { Component } from 'react';
import logo from './logo.svg';
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

  setPage(page) {
    this.setState({ currentPage: page });
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
          this.setPage(PAGE_REPOS);
          this.login(userData);
        }}/>

      case PAGE_REPOS:
        return <RepoList
            token={this.state.token}
            onSelect={(repo) => {
              this.setPage(PAGE_DASHBOARD);
              this.setState({currentRepo: repo})
              }}
              onLogout={() => this.logout()}
            />

      case PAGE_DASHBOARD:
        return <Dashboard
            repo={this.state.currentRepo}
            user={this.state.user}
            token={this.state.token}
            onSelectRepo={() => {
              this.setPage(PAGE_REPOS)
              this.setState({currentRepo: ""})
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
