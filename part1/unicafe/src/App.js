import {useState} from 'react'
import './App.css';

const Sentiment = ({text, sentimentValue}) =>{
  return (<p>{text} {sentimentValue}</p>)
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let all = good + bad + neutral
  return (
    <div>
      <h1> give feedback</h1>
      <button onClick={() => setGood (good + 1)}> good</button>
      <button onClick={() => setNeutral (neutral + 1)}> neutral</button>
      <button onClick={() => setBad (bad + 1)}> bad</button>
      <h1> statistics</h1>
      <Sentiment text={"good"} sentimentValue={good}/>
      <Sentiment text={"neutral"} sentimentValue={neutral}/>
      <Sentiment text={"bad"} sentimentValue={bad}/>
      <Sentiment text={"all"} sentimentValue={all}/>
      <Sentiment text={"average"} sentimentValue={(good * 1 + bad * -1)/all }/>
      <Sentiment text={"positive"} sentimentValue={(good/all) * 100}/>
      
    </div>
  )
}

export default App;
