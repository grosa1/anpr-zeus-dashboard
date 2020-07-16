import React, { Component } from 'react';
import logo from './logo.svg';
import RepoList from './repository/RepoList'
import './App.css';

import Container from '@material-ui/core/Container';

class App extends Component {

  constructor() {
    super()
    // this.setPage = this.setPage.bind(this);
    this.state = {
      pages: [],
      currentPage: "repoList"
    }
  }

  setPage(page) {
    this.setState({ currentPage: page });
  }

  render() {
    return (
      <Container maxWidth="md">
        <div className="App">
            { this.state.currentPage === 'repoList' ? <RepoList /> : "" }
        </div>
      </Container>
    )
  }
}
export default App



      //todo fare componente
      // <AppBar position="static">
      //   <Toolbar>
      //     <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      //       <MenuIcon />
      //     </IconButton>
      //     <Typography variant="h6" className={classes.title}>
      //       News
      //     </Typography>
      //     <Button color="inherit">Login</Button>
      //   </Toolbar>
      // </AppBar>