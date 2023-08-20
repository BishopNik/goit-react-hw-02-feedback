/** @format */

import { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class SectionRendering extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		children: PropTypes.node.isRequired,
	};

	handelClickButton = e => {
		this.changeClickOnButton(e);
	};

	render() {
		const { title, children } = this.props;
		return (
			<section className='section'>
				<h3 className='title'>{title}</h3>
				{children}
			</section>
		);
	}
}

export default SectionRendering;
