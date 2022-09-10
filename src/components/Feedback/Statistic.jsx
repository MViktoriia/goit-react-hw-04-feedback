import { FeedbackStatistic } from './Statistic.styled';

const Statistic = ({good,neutral,bad,total,positivePercentage}) => (
    <div>
        <p>Statistics</p>
        <FeedbackStatistic>
            <li>Good:{good}</li>
            <li>Neutral:{neutral}</li>
            <li>Bad:{bad}</li>
            <li>Total:{total}</li>
            <li>Total:{total === 0 ? 0 : positivePercentage}%</li>
        </FeedbackStatistic>
    </div>
);

export default Statistic;