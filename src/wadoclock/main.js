import React, { Component } from 'react';
import moment from 'moment';
import Wado from '../wado';

import './main.css';

class Wadoclock extends Component {

    checkLatin() {
        let { location: { search } = {}} = this.props;
        return search.replace(/^.*?\=/, '') == 'true' ? true : false;
    }

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


    renderWado(message, date) {
        return <Wado message={message} date={date} latin={this.checkLatin()} />
    }

    render() {

        let { event, date } = this.props;
        let validatedDate = this.validateDate(date);

        if(typeof event === 'undefined' && typeof date === 'undefined') {
            return this.renderWado();
        }
        else if(validatedDate > 0) {
            if(validatedDate === 1) {
                return this.renderWado(`=================================================================================================
                =========================================${this.checkLatin() ? '=== Date abit! ===' : ' Date has passed! '}=========================================
                =================================================================================================`);
            } else {
                return this.renderWado(event, moment(date, 'YYYY-MM-DD HH:mm'));
            }
        } else {
            return this.renderWado(`=================================================================================================
                    ======================================= ${this.checkLatin() ? 'Aliquam diem, brah!' : 'Invalid date, brah!'} ========================================
                    =================================================================================================`);
        }
    }
}

export default Wadoclock;
