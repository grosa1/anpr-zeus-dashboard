import React, {Component} from 'react'
import {getRepoList} from './RepoController'
import RepoItem from './RepoItem'

import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from "@material-ui/core/styles";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const classes = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    btn: {
        marginLeft: "auto"
    }
}));

class RepoList extends Component {

  constructor() {
    super()
    this.state = {
      repos: []
    }
  }

  componentDidMount() {
    getRepoList(this.props.token).then((data) => {
      this.setState({ repos: data });
    })
  }

  render() {
    return (
        <div>
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Select repository
                    </Typography>
                    <IconButton
                        color="inherit"
                        style={{ marginLeft: "auto" }}
                        onClick={() => this.props.onLogout()}
                    >
                        <ExitToAppIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
        <Container maxWidth="md">
              <div>
                <List dense>
                  {
                  this.state.repos.map((item) => {
                    return (
                      <RepoItem item={item} onSelect={(repo) => this.props.onSelect(repo)}/>
                    );
                  })
                  }
                </List>
              </div>
        </Container>
        </div>
    );
  }
}

export default RepoList
