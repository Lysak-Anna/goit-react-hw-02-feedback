import PropTypes from 'prop-types';

import { Title, List, FeedbackItem } from './Statistics.styled';
export default function Statistics({ good, neutral, bad, total, percentage }) {
    return (
        <div>
            <Title>Statistics</Title>
            <List>
        <FeedbackItem>Good: {good}</FeedbackItem>
        <FeedbackItem>Neutral: {neutral}</FeedbackItem>
        <FeedbackItem>Bad: {bad}</FeedbackItem>
        <FeedbackItem>Total: {total}</FeedbackItem>
        <FeedbackItem>
          Positive feedback: {percentage}
            </FeedbackItem>
            </List>
        </div>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percentage: PropTypes.string.isRequired
}
