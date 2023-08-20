/** @format */

import { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class FeedbackOptions extends Component {
	static propTypes = {
		valueButtons: PropTypes.arrayOf(PropTypes.string).isRequired,
		onLeaveFeedback: PropTypes.func.isRequired,
	};

	handelClickButton = e => {
		const idButton = e.currentTarget;
		setTimeout(() => (idButton.style.scale = '1.1'), 50);
		setTimeout(() => idButton.removeAttribute('style'), 150);
	};

	render() {
		const { valueButtons, onLeaveFeedback } = this.props;

		return (
			<div className='buttons'>
				{valueButtons.map(button => (
					<button
						type='submit'
						key={button}
						onClick={e => {
							this.handelClickButton(e);
							onLeaveFeedback(button);
						}}
					>
						{button.toUpperCase()}
					</button>
				))}
			</div>
		);
	}
}

export default FeedbackOptions;
