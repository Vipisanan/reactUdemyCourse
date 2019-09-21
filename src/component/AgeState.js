import React from 'react';
import partyPopper from '../assets/party-popper.jpg'

class AgeState extends React.Component {
    timeSince(date){
        let today =new Date().getTime();
        let other_date = new Date(date).getTime();
        let different = Math.abs(today-other_date);

        let days=Math.floor(different/(1000*3600*24));
        let year=Math.floor(days/365);
        days =days-year*365;

        let months=Math.floor(days/31);
        days = days-months*31;
        return `${year} years ${months} months ${days} days`;
    }
    render() {
        return (
            <div>
                <h2> {this.props.date}</h2>
                <h1>Congrats {this.timeSince(this.props.date)}!</h1>
                <img src={partyPopper} alt="party-popper"/>
            </div>

        );
    }
}

export default AgeState;