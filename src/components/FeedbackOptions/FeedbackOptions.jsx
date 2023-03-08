import PropTypes from 'prop-types';
import { ButtonList, ButtonItem, RatingButton } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <ButtonList>
            {options.map(option => (
                <ButtonItem key={option}>
                    <RatingButton type="button" name={option} onClick={onLeaveFeedback}>
                        {option}
                    </RatingButton>
                </ButtonItem>
            ))}
        </ButtonList>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};