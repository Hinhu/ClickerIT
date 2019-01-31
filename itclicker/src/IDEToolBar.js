import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class IDEToolBar extends Component {
    render() {
        return (
            <div >
                <AppBar position="static" style={{ background: '#2b2727' }}>
                    <Toolbar>
                        <Typography variant="h6" color="inherit" >
                            IT Clicker
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default IDEToolBar;