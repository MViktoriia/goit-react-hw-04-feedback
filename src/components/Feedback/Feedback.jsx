import { Component } from "react";
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistic/Statistics';
import Notification from "../Notification/Notification";
import Section from "../Section/Section";


export class Feedback extends Component {
    static defaultProps = {
        initialGood: 0,
        initialNeutral: 0,
        initialBad: 0,
    };

    state = {
        good: this.props.initialGood,
        neutral: this.props.initialNeutral,
        bad: this.props.initialBad
    };

    handleFeedback = (propertyName) => {
        this.setState((prevState) => {
            return {
                [propertyName]: prevState[propertyName] + 1,
            };
        });
    };

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    };

    countPositiveFeedbackPercentage = () => {
        return Math.round(this.state.good/(this.state.good + this.state.neutral + this.state.bad)*100)
    };

    render() {
        const total = this.countTotalFeedback();
        const options = Object.keys(this.state);
        return (
            <>
                <Section title= 'Please leave feedback'>
                    <FeedbackOptions options={options} onLeaveFeedback={this.handleFeedback} />
                </Section>
                <Section title = 'Statistics'>
                    {!total ? <Notification message="No feedback given" /> : <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={total} positivePercentage={this.countPositiveFeedbackPercentage()} />}
                </Section>
            </>
        );
    }
};