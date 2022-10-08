import { useState } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistic/Statistics';
import Notification from "../Notification/Notification";
import Section from "../Section/Section";

export function Feedback() {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleFeedback = (propertyName) => {
        switch (propertyName) {
            case "good":
                return setGood((prev) => prev + 1);
            case "neutral":
                return setNeutral((prev) => prev + 1);
            case "bad":
                return setBad((prev) => prev + 1);
            default:
                return;
        }
    };
        
    const countTotalFeedback = () => {
        return good + neutral + bad;
    };

    const countPositiveFeedbackPercentage = () => {
        return Math.round(good/(good + neutral + bad)*100)
    };    
    
    const total = countTotalFeedback();

    return (
        <>
            <Section title= 'Please leave feedback'>
                <FeedbackOptions options={['good','neutral','bad']} onLeaveFeedback={handleFeedback} />
            </Section>
            <Section title = 'Statistics'>
                {!total ? <Notification message="No feedback given" /> : <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={countPositiveFeedbackPercentage()} />}
            </Section>
        </>
    );
};