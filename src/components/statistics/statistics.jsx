/** @format */

import PropTypes from 'prop-types';
import './style.css';

const Statictics = ({ totalFeedback, feedback, positiveFeedback }) => {
	const color = positiveFeedback >= 50 ? { color: 'green' } : { color: 'red' };
	const { good, neutral, bad } = feedback;
	return (
		<ul>
			<li>Good: {good}</li>
			<li>Neutral: {neutral}</li>
			<li>Bad: {bad}</li>
			<li>Total: {totalFeedback}</li>
			<li style={color}>Positive feedback: {positiveFeedback}%</li>
		</ul>
	);
};

Statictics.propTypes = {
	totalFeedback: PropTypes.number.isRequired,
	positiveFeedback: PropTypes.number.isRequired,
	feedback: PropTypes.exact({
		good: PropTypes.number.isRequired,
		neutral: PropTypes.number.isRequired,
		bad: PropTypes.number.isRequired,
	}).isRequired,
};

export default Statictics;
