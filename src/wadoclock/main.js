import React, { Component } from 'react';
import Wado from '../wado';

import './main.css';

class Wadoclock extends Component {

    renderWado() {
        return <Wado />
    }

    render() {
        let { event, date } = this.props;

        if(typeof event === 'undefined' && typeof date === 'undefined') {
            return this.renderWado();
        }
        else {
            return (<div>What's the timer Mr Wadders?</div>);
        }
    }
}

export default Wadoclock;
