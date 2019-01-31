import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import IDEToolBar from './IDEToolBar.js';
import UpgradesList from './UpgradesList.js'
import Clicker from './Clicker.js';
import Grid from '@material-ui/core/Grid';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      listContainerY:65
    }
    this.resize = this.resize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  resize() {
    let ListContainer=ReactDOM.findDOMNode(this.refs['ListContainer'])
    if(ListContainer!=null){
      console.log(ListContainer.getBoundingClientRect())
      this.setState({listContainerY:ListContainer.getBoundingClientRect().y});
    }
  }

  render() {
    console.log(this.state.listContainerY)
    return (
      <div >
        <header>
          <IDEToolBar />
        </header>
        <Grid container spacing={0} justify="center" alignItems="stretch" style={{}}>
          <Grid ref="ListContainer" item md={3}>
            <UpgradesList y={this.state.listContainerY}/>
          </Grid>
          <Grid item md={7}>
            <Clicker />
          </Grid>
          <Grid item md={2}>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
