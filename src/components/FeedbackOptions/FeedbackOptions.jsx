import { Box } from 'Box';
import PropTypes from 'prop-types';
import { FeedbackButton } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const arrBtns = Object.keys(options);
  return (
    <Box display="flex" justifyContent="space-evenly">
      {arrBtns.map((btn, i) => {
        return (
          <FeedbackButton
            type="button"
            key={i}
            onClick={()=>onLeaveFeedback(btn)}
            data-type={btn}
          >
            {btn}
          </FeedbackButton>
        );
      })}
    </Box>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};
