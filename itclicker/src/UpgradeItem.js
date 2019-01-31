import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class UpgradeItem extends Component {
    render() {
        return (
            <div >
                <ListItem button divider>
                    <ListItemText primary={this.props.name} secondary={this.props.linesPerSec+" lines per second"} />
                </ListItem>
            </div>
        );
    }
}

export default UpgradeItem;