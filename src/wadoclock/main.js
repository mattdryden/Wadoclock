import React, { Component } from 'react';
import moment from 'moment';
import Wado from '../wado';

import './main.css';

class Wadoclock extends Component {

    validateDate(date) {
        if (/[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):[0-5][0-9]/.test(date) === false) {
            return 0;
        }
        date = moment(date, 'YYYY-MM-DD HH:mm');
        if(date.isValid() && date > moment()) {
            return 2;
        } else if(date.isValid() && date < moment()) {
            return 1
        } else {
            return 0;
        }
    }



    renderWado(message) {
        return <Wado message={message} />
    }

    render() {
        let { event, date } = this.props;
        let validatedDate = this.validateDate(date);

        if(typeof event === 'undefined' && typeof date === 'undefined') {
            return this.renderWado();
        }
        else if(validatedDate > 0) {
            if(validatedDate === 1) {
                return this.renderWado('===================================== Date has passed! =======================================');
            } else {
                return event;
            }
        } else {
            return this.renderWado('==================================== Invalid date, brah! =====================================');
        }
    }
}

export default Wadoclock;
