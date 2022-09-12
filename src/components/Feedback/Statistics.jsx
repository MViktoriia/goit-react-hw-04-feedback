import PropTypes from 'prop-types';
import { FeedbackStatistic } from './Statistic.styled';

const Statistics = ({good,neutral,bad,total,positivePercentage}) => (
    <>
        <FeedbackStatistic>
            <li>Good:{good}</li>
            <li>Neutral:{neutral}</li>
            <li>Bad:{bad}</li>
            <li>Total:{total}</li>
            <li>Total:{!total ? 0 : positivePercentage}%</li>
        </FeedbackStatistic>
    </>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;