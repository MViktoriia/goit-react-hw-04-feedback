import PropTypes from 'prop-types';
import { OptionList, OptionItem } from '../Feedback.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <OptionList>
        <OptionItem><button type="button" onClick={() => {onLeaveFeedback(options[0])}}>Good</button></OptionItem>
        <OptionItem><button type="button" onClick={() => {onLeaveFeedback(options[1])}}>Neutral</button></OptionItem>
        <OptionItem><button type="button" onClick={() => {onLeaveFeedback(options[2])}}>Bad</button></OptionItem>
    </OptionList>
);

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;