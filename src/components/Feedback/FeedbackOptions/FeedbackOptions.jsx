import { Button } from "./FeedbackOptions.styled";
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, handleIncrement }) => {
return options.map((option) => {
  return (
     <Button key={option} onClick={() => handleIncrement(option)} type='button'>
     {option}
     </Button>
     );
});
};

export default FeedbackOptions;

FeedbackOptions.propTYpes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleIncrement: PropTypes.func.isRequired,
}
