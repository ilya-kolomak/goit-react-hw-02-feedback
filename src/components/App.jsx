import { Component } from 'react';
import { Wrap } from './Wrap.styled';
import FeedbackOptions from "./Feedback/FeedbackOptions/FeedbackOptions";
import Section from "./Feedback/Section/Section";
import Statistics from './Feedback/Statistics/Statistics';
import Notification from './Feedback/Notification/Notification';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
}

handleIncrement = option => {
  this.setState(prevState => ({
   [option]: prevState[option] + 1,
  }));
};

countTotalFeedback = (good, neutral,bad) => {
  const total = good + neutral + bad;
  return total;
}

countPositiveFeedbackPercentage = (total, good) => {
  const percentage = Math.round((good / total) * 100);
    return percentage;
}

render () {
  const { good, neutral, bad } = this.state;
  const total = this.countTotalFeedback(good, neutral, bad);
  const positivePercentage = this.countPositiveFeedbackPercentage(total, good);
  const options = Object.keys(this.state);
  return (
       <>
      <Section title='Please leave feedback'>
      <Wrap> 
      <FeedbackOptions options={options} handleIncrement={this.handleIncrement}/>
      </Wrap>  
      </Section>
      <Section title="Statistics">
      {total ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/> : <Notification message="There is no feedback"/>}  
      </Section>
      </>
  )
}
}


export default App;