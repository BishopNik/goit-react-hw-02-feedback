/** @format */

import PropTypes from 'prop-types';
import './style.css';

const SectionTitle = ({ title, children }) => {
	return (
		<section className='section'>
			<h3 className='title'>{title}</h3>
			{children}
		</section>
	);
};

SectionTitle.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export default SectionTitle;
