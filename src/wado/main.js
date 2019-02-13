import React, { Component } from 'react';
import moment from 'moment';
import './main.css';

class Wado extends Component {

    constructor(props) {
        super(props);
        this.state = { }
        this.timer = {};
    }

    formattedUntil() {
        let { date } = this.props;
        const diff = date.diff(moment());
        const diffDuration = moment.duration(diff);
        let years = diffDuration.years();
        let months = diffDuration.months();
        let weeks = diffDuration.weeks();
        let days = diffDuration.days();
        let hours = diffDuration.hours();
        let minutes = diffDuration.minutes();
        let seconds = diffDuration.seconds();

        let formatted = '';

        if(years > 0) {
            formatted += `${years} years, `;
        }

        if (months > 0) {
            formatted += `${months} months, `;
        }

        if (weeks > 0) {
            formatted += `${weeks} weeks, `;
        }

        if (days > 0) {
            formatted += `${days} days, `;
        }

        if (hours > 0) {
            formatted += `${hours} hours `;
        }

        if (minutes > 0) {
            formatted += `${minutes} minutes, `;
        }

        if (seconds > 0) {
            formatted += `${seconds} seconds, `;
        }

        return formatted;

    }

    componentDidMount() {

        if(typeof this.props.message === 'undefined')  {
            this.timer=setInterval(() => {
                this.setState({
                    message: `===================================================================================================
                    =================================== THE TIME IS ${moment().format('hh:mm:ss a')} =======================================
                    ================================================================================================`
                })
            }, 1000);
        } else if(typeof this.props.date !== 'undefined') {
            let difference = moment.duration(this.props.date.diff(moment()));
            this.timer = setInterval(() => {
                this.setState({
                    message: `================================================================================================
                    ${this.formattedUntil()} until ${this.props.message}
                    ================================================================================================`
                })
            }, 1000);
        } else {
            this.setState({
                message: this.props.message
            })
        }
    }

    componentWillUnmount() {
        if (typeof this.props.message === 'undefined' || typeof this.props.date !== 'undefined') {
            clearInterval(this.timer);
        }
    }
    
    render() {
        let { message } = this.state;

        let mrwaddo = typeof this.props.message === 'undefined' ? `================================================================================================
        ================================== WHATS THE TIME MR WADDO? =======================================
        `: ''

        return (
            <div id="wado">
                <pre>
                    MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNdmdyydmNMMMMMMoMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMmdyysysyyyyssssyyhdmN.MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMmysydyyyyydhdyyyyshysso:hdMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMyyyssyyyyyyssyyyyssyydhyoo+shMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMms+osooooo++oooossso++++yhhhsy/omMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMh+++:----:--..-----::--.--/sdhhsohMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMh++-.................-.....-:+ydsssdMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMd++`  `.----------------------:+shhsodMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMo+- ``--::::---------------::::/oydmhsyMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMm+/.`.-----::::::----------:::::+oshmmhoNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMdo/-.--------:::------::::::::::/oshdmdyhMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMdy+-://+///:::////+ossysssso/::::+shmmmdyNMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMdds/ssyhhyys+++++osyyyysssoo+/:::/shmNmdysMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMmmy+osyyhhhyyso+++ossyyhhyso+/::::ohmdhyosMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMNmh++sysdmdhys/::/+ossoyyso++/:---/yhyso+oMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNy:-:+osssso+-.-:::+oo++///:::----o+ss+/dMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMs-.:+oooo++/..--:///////:::---..-::+o/sMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMd-.://+/+++-..-:/++///:::::::----::///NNNMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM/://///+++.----/+o+///::////:---:+++smmmNNNmNNNNNMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMNNNNNMNMMMM+:+++/+++/////++/+++////////:::::hdmNNMMMMNNNNmmmmNMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMmhdmNMMMMMMNy/+++++++syssyyo//++/////////::+NMMMMMMMMMMNNNNNmmdNNMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMNddddmNMMMMMMMMMNo//+++++ssyysso+//++////////:/hMMMMMMMMMMMNNNNmmdhhhhmmNNNmmmmmddh
MMMMMMMMMMMMMMMMMmydmNNMMMMMMMMMMMNo//+ooossoo+o+++o++//////////hhhyysssoo+++++++++++++oossyyyyyyyyy
MMMMMMMMMMMMMMMNmdmNNNMMMMMMMMMMMMMmo/+osssssoooo+++o+/////:..-:/+++ooossyyyyyyhhhhhhddddddddddddddd
MMMMMMMMMMMMMmdmmNNNNMMMMMMMMMMMMMMMmo/osoossssoo+//++++///`.+hhddddddddddddmddmmmmmmmmmmNNNNNNNNNNN
MMMMMMMMMMMmddmNNNNNNMMMMMMMMMMMMMMMMmssssssssso++++++o+++/:/mNNmmmmmmmdmNNNNNNNNNNNNNNmmmmmmmmmmmmm
MMMMMMMMMNddmmNNNNNNNNNNMMMMMMMMMMMMMMNhsysssyyysooo+++oooo/+NNNNNNmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
MMMMMMMMNNNNNNNNNNNNNNMMMMMMMMMMMMMMMMMMmhysssooo++oossyys+/+NNNNNNNNNmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
MMMMMMMNNNMMMNNMNNNNMMMMMMMMMMMMMMMMMNNMMMmdysooooosyysssso/+NMNNNNNNNNmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
MMMMMMMNNNNNMMMMMMMMMMMMMMMMMMMMMMMMMNmNMMMMNmddhyyssooosyy/+NNNNNNNNNNNmmmmmmmmmmmmmmmmmmmmmmmmmmmm
MMMMMMMmmmNNNMMMMMMMMMMMMMMMMMMMMMMMMMmdNMMMMMMNdhsoooosdMh/+NNNNNNNNNNNNNNmmmmmmmmmmmmmmmmmmmmmmmmm
MMMMMMNmmNNMMMMMMMMMMMMMMMMMMMMMMMMMMMmdmMMMMMMMNNmdhyhNMMy/+NNNNNNNNNNNNNNNNNNmmmmmmmmmmmmmmmmmmmmm
MMMMMMmmNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMNddmMMMMMMMMMMMMMMMMy/oNNNNNNNNNNNNNNNNNNmmmmmmmmmmmmmmmmmmmmm
MMMMMNmmNNNNMMMMMMMMMMMMMMMMMMMMMMMMMMNdddNMMMMMMMMMMMMMMMy/oNNNNNNNNNNNNNNNNNNNNNNNNmmmmmmmmmmmmmmm
MMMMMmmNNNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMddhdMMMMMMMMMMMMMMMy/oMNNNNNNNNNNNNNNNNNNNNNNNNNmmmmNNmmmmmmN
MMMMMmNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMmdhhmMMMMMMMMMMMMMMs/oMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmmmmNmmNN
MMMMNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMdhhhNMMMMMMMMMMMMMs/oMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
MMMMNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNhhhdMMMMMMMMMMMMN+/sMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
MMMMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMdhhhmMMMMMMMMMMMd+/sMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
MMMMmNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNhhhhNMMMMMMMMMNh+/sMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
MMMNmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMmhhhdMMMMMMMMMdh+/yNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
MMMNNNMNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMdhhdNMMMMMMMmo//+yNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
MMMNNNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMmhddmMMMMMMNy//++yNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
MMMNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMddddMMMMMMmyyh++hNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
MMMNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNdddmMMMMNdddm++hMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
MMMNNNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNmddmMMMMdhhmN++hNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
==={mrwaddo}{message}===
                </pre>
            </div>
        )
    }
}

export default Wado;
