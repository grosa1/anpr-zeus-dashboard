import React, { Component } from 'react'

import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

class RepoItem extends Component {

  render() {
    return (
      <div>
        <ListItem>
            <ListItemAvatar>
            <Avatar>
                <FolderIcon />
            </Avatar>
            </ListItemAvatar>
            <ListItemText
            primary={ this.props.item.full_name }
            secondary={ this.props.item.description ? this.props.item.description : 'Nessuna descrizione.' }
            />
            <ListItemSecondaryAction>
            <IconButton onClick={() => this.props.onSelect(this.props.item.full_name)}>
                <ArrowRightIcon />
            </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
      </div>
    );
  }
}

export default RepoItem
