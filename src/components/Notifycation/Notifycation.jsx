import PropTypes from 'prop-types';

export const Notifycation = ({ message }) => {
  return <h2>{message}</h2>;
};

Notifycation.propTypes = {
  message: PropTypes.string.isRequired,
};
