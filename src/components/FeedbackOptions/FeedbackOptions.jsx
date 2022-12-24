import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';
export default function FeedbackOptions({ onLeaveFeedback }) {
    return (
         <div>
          <Button type="button" onClick={onLeaveFeedback} data-value="good">
            Good
          </Button>
          <Button
            type="button"
            onClick={onLeaveFeedback}
            data-value="neutral"
          >
            Neutral
          </Button>
          <Button type="button" onClick={onLeaveFeedback} data-value="bad">
            Bad
          </Button>
        </div>
    )
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired
}
