import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Clicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lines: parseInt(localStorage.getItem('lines')) || 0,
            linesPerSec: 2,
            linesPerClick: 1
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            localStorage.setItem('lines', this.state.lines);
            this.setState({ lines: this.state.lines + this.state.linesPerSec });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    handleCode = () => {
        localStorage.setItem('lines', this.state.lines);
        this.setState({ lines: this.state.lines + this.state.linesPerClick });
    }

    reset = () => {
        localStorage.setItem('lines', 0);
        this.setState({ lines: 0 });
    }

    render() {
        return (
            <div >
                <p>Lines: {this.state.lines}</p>
                <p>Lines/Click: {this.state.linesPerClick}</p>
                <p>Lines/Second: {this.state.linesPerSec}</p>
                <p><Button onClick={this.handleCode}>Code</Button></p>
                <p><Button variant="contained" color="secondary" onClick={this.reset}>RESET</Button></p>
            </div>
        );
    }
}

export default Clicker