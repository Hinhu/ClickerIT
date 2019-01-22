import React, { Component } from 'react';
import IDEToolBar from './IDEToolBar.js';
import Grid from '@material-ui/core/Grid';
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
        <header>
          <IDEToolBar />
        </header>
        <Grid container spacing={0} justify="center" alignItems="stretch" style={{paddingTop:'62px'}}>
          <Grid item md={3}>
          </Grid>
          <Grid item md={7}>
          </Grid>
          <Grid item md={2}>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
