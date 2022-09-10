import { Component } from "react";
import Options from './Options';
import Statistic from './Statistic';
import Notification from "./Notification";
import Section from "./Section";
// import PropTypes from 'prop-types';

export class Feedback extends Component {
    static defaultProps = {
        initialGood: 0,
        initialNeutral: 0,
        initialBad: 0,
    };

    // static propTypes = {

    // };

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    handGoodFeedback = () => {
        this.setState((prevState) => {
            return {
                good: prevState.good + 1,
            };
        });
        console.log(this.state.good);
    }
    
    handNeutralFeedback = () => {
        this.setState((prevState) => {
            return {
                neutral: prevState.neutral + 1,
            };
        });
        console.log(this.state.neutral);
    } 

    handBadFeedback = () => {
        this.setState((prevState) => {
            return {
                bad: prevState.bad + 1,
            };
        });
        console.log(this.state.bad);
    } 

    render() {
        return (
            <div>
                <p>Please leave feedback</p>
                <Section><Options onGood={this.handGoodFeedback} onNeutral={this.handNeutralFeedback} onBad={this.handBadFeedback} /></Section>
                <Section>{(this.state.good + this.state.neutral + this.state.bad) === 0 ? <Notification message="No feedback given"/> : <Statistic good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.state.good + this.state.neutral + this.state.bad} positivePercentage={Math.round(this.state.good/(this.state.good + this.state.neutral + this.state.bad)*100)} />}</Section>
            </div>
        );
    }
}