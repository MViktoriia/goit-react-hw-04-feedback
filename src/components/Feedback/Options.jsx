import { OptionList, OptionItem } from './Feedback.styled';

const Options = ({ onGood, onNeutral, onBad }) => (
    <OptionList>
        <OptionItem><button type="button" onClick={onGood}>Good</button></OptionItem>
        <OptionItem><button type="button" onClick={onNeutral}>Neutral</button></OptionItem>
        <OptionItem><button type="button" onClick={onBad}>Bad</button></OptionItem>
    </OptionList>
);

export default Options;