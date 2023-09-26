/** @format */

import PropTypes from 'prop-types';
import './style.css';

const FeedbackOptions = ({ valueButtons, onLeaveFeedback }) => {
	const handelClickButton = e => {
		const idButton = e.currentTarget;
		setTimeout(() => (idButton.style.scale = '1.1'), 50);
		setTimeout(() => idButton.removeAttribute('style'), 150);
	};

	return (
		<div className='buttons'>
			{valueButtons.map(button => (
				<button
					type='submit'
					key={button}
					onClick={e => {
						handelClickButton(e);
						onLeaveFeedback(button);
					}}
				>
					{button.toUpperCase()}
				</button>
			))}
		</div>
	);
};

FeedbackOptions.propTypes = {
	valueButtons: PropTypes.arrayOf(PropTypes.string).isRequired,
	onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
