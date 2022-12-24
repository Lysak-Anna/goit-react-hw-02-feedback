import './App.css';
import { Component } from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  clickHandler = e => {
    const target = e.currentTarget.dataset.value;
    this.setState(prevState => {
      return { [target]: prevState[target] + 1 };
    });
  };
  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, value) => {
      return acc + value;
    }, 0);
  }
  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    return Math.round((this.state.good * 100) / total);
  }
  render() {
    const { good, neutral, bad } = this.state;
    const percentage = this.countPositiveFeedbackPercentage();
    const total = this.countTotalFeedback();
    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.clickHandler} />
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              percentage={!percentage ? '0' : `${percentage}%`}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
