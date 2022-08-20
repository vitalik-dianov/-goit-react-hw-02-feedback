import React from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notifycation } from './Notifycation/Notifycation';
import { Box } from 'Box';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = e => {
    const keys = Object.keys(this.state);
    keys.forEach(el => {
      if (el === e.target.dataset.type) {
        this.setState(prevState => {
          return { [el]: prevState[el] + 1 };
        });
      }
    });
  };

  countTotalFeedback = () => {
    let total = 0;
    for (const grade in this.state) {
      total += this.state[grade];
    }
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const percentage = parseInt(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    return percentage ? percentage : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Box
        width="100%"
        height="100vh"
        pt={7}
        backgroundColor="backgroundPrimary"
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.addFeedback}
          />

          {this.countTotalFeedback() === 0 ? (
            <Notifycation message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Box>
    );
  }
}
