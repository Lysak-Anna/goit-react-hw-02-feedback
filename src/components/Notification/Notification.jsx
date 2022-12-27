import PropTypes from 'prop-types';
import { Title } from './Notification.styled';
export default function Notification({ message }) {
  return (
    <div>
      <Title>{message}</Title>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
