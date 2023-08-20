/** @format */

import { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Statictics extends Component {
	static propTypes = {
		goodValue: PropTypes.number.isRequired,
		neutralValue: PropTypes.number.isRequired,
		badValue: PropTypes.number.isRequired,
	};

	render() {
		const { goodValue, neutralValue, badValue } = this.props;
		const sumFeedback = goodValue + neutralValue + badValue;
		const positiveFeedback = Math.round((goodValue * 100) / sumFeedback);
		const color = positiveFeedback >= 50 ? { color: 'green' } : { color: 'red' };
		return (
			<ul>
				<li>Good: {goodValue}</li>
				<li>Neutral: {neutralValue}</li>
				<li>Bad: {badValue}</li>
				<li>Total: {sumFeedback}</li>
				<li style={color}>Positive feedback: {positiveFeedback}%</li>
			</ul>
		);
	}
}

export default Statictics;
