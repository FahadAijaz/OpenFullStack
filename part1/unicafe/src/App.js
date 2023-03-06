import { useState } from 'react'
import './App.css';

const StatisticLine = ({ text, sentimentValue }) => {
  return (<p>{text} {sentimentValue}</p>)
}
// exercise 1.10 is already complete
const Statistics = ({ good, bad, neutral }) => {
  
  let all = good + bad + neutral
  if (all === 0){
    return <p>No feedback given</p>
  }
  return (<div><StatisticLine text={"good"} sentimentValue={good} />
    <StatisticLine text={"neutral"} sentimentValue={neutral} />
    <StatisticLine text={"bad"} sentimentValue={bad} />
    <StatisticLine text={"all"} sentimentValue={all} />
    <StatisticLine text={"average"} sentimentValue={(good * 1 + bad * -1) / all} />
    <StatisticLine text={"positive"} sentimentValue={(good / all) * 100} />
  </div>)
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
      <h1> give feedback</h1>
      <button onClick={() => setGood(good + 1)}> good</button>
      <button onClick={() => setNeutral(neutral + 1)}> neutral</button>
      <button onClick={() => setBad(bad + 1)}> bad</button>
      <h1> statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App;
