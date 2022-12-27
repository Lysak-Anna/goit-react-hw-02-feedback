import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';
import { nanoid } from 'nanoid';
export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(option => (
        <Button key={nanoid()} type="button" onClick={onLeaveFeedback}>
          {option}
        </Button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
