import { useState } from 'react';
import './App.css';
import { Section } from './components/Section/Section';
import { Buttons } from './components/Button/Buttons';
import { Statistics } from './components/Statistics/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const total = good + neutral + bad;

  const handleOnClick = (name) => {
    if (name === 'good') {setGood(prevGood => prevGood + 1)}
    if (name === 'neutral') {setNeutral(prevNeutral => prevNeutral+ 1)}
    if (name === 'bad') {setBad(prevBad => prevBad + 1)}
  };

  const positivePercentage = Math.round(good / total * 100);

  return (
    <div>
      <Section title="Please leave feedback">
        <Buttons names={{good,neutral,bad}} onClick={handleOnClick}/>
      </Section>
      <Section title="Statistics">
        {total ? <Statistics 
          good={good} 
          neutral={neutral}
          bad={bad} 
          total={total} 
          positivePercentage={positivePercentage}/>: 'No feedback given'}
      </Section> 
    </div>
  );
}

export default App;
