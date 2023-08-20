/** @format */

import { Component } from 'react';
import Statictics from './statistics';
import FeedbackOptions from './feedbackoptions';
import SectionRendering from './rendercomponent/sectiontitle';
import Notification from './rendercomponent/notification';

class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	};

	buttons = ['good', 'neutral', 'bad'];
	SECTIONFIRST = 'Please leave feedback';
	SECTIONSECOND = 'Statistics';

	handlerChangeFeedback = newFeed => {
		this.setState(prevState => ({
			[newFeed]: prevState[newFeed] + 1,
		}));
	};

	render() {
		const { good, neutral, bad } = this.state;
		const sumFeedback = good + neutral + bad;

		return (
			<>
				<SectionRendering title={this.SECTIONFIRST}>
					<FeedbackOptions
						valueButtons={this.buttons}
						onLeaveFeedback={this.handlerChangeFeedback}
					/>
				</SectionRendering>
				<SectionRendering title={this.SECTIONSECOND}>
					{sumFeedback ? (
						<Statictics goodValue={good} neutralValue={neutral} badValue={bad} />
					) : (
						<Notification />
					)}
				</SectionRendering>
			</>
		);
	}
}

export default App;
