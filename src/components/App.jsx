/** @format */

import { Component } from 'react';
import Statictics from './statistics';
import FeedbackOptions from './feedbackoptions';
import SectionTitle from './sectiontitle';
import Notification from './notification';

class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	};

	buttons = ['good', 'neutral', 'bad'];
	SECTIONFIRST = 'Please leave feedback';
	SECTIONSECOND = 'Statistics';

	countTotalFeedback = () => {
		const { good, neutral, bad } = this.state;
		return good + neutral + bad;
	};

	countPositiveFeedbackPercentage = () => {
		return Math.round((this.state.good * 100) / this.countTotalFeedback());
	};

	handlerChangeFeedback = newFeed => {
		this.setState(prevState => ({
			[newFeed]: prevState[newFeed] + 1,
		}));
	};

	render() {
		return (
			<>
				<SectionTitle title={this.SECTIONFIRST}>
					<FeedbackOptions
						valueButtons={this.buttons}
						onLeaveFeedback={this.handlerChangeFeedback}
					/>
				</SectionTitle>
				<SectionTitle title={this.SECTIONSECOND}>
					{this.countTotalFeedback() ? (
						<Statictics
							totalFeedback={this.countTotalFeedback()}
							feedback={this.state}
							positiveFeedback={this.countPositiveFeedbackPercentage()}
						/>
					) : (
						<Notification />
					)}
				</SectionTitle>
			</>
		);
	}
}

export default App;
