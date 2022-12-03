import { Wrap, Feedback, Total } from "./Statistics.styled";
import PropTypes from 'prop-types';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <>
        <Wrap>
        <Feedback>Good: {good}</Feedback>
        <Feedback>Neutral: {neutral}</Feedback>
        <Feedback>Bad: {bad}</Feedback>
        </Wrap>
        <div>
            <Total>Total: {total}</Total>
            <p>Positive feedback: {positivePercentage}%</p>
        </div>
        </>
    )
}

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};