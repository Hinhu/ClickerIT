import React, { Component } from 'react';
import List from '@material-ui/core/List';
import UpgradeItem from './UpgradeItem.js'

class UpgradesList extends Component {
    constructor(props) {
        super(props);
        this.resize = this.resize.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.resize);
    }

    resize() {
        this.forceUpdate();
    }
    render() {
        return (
            <div >
                <List style={{ overflow: 'auto', maxHeight: window.innerHeight / 2 - this.props.y }}>
                    <UpgradeItem name="Bash script" linesPerSec="1" />
                    <UpgradeItem name="Your buddy from school" linesPerSec="3" />
                    <UpgradeItem name="Intern" linesPerSec="5" />
                    <UpgradeItem name="Junior" linesPerSec="10" />
                    <UpgradeItem name="Mid" linesPerSec="20" />
                    <UpgradeItem name="Senior" linesPerSec="30" />
                </List>
            </div>
        );
    }
}

export default UpgradesList;