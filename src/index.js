import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>
};

const Statistic = ({ text, value }) => {
  return <p>{text} {value}</p>
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  if (all === 0) {
    return (
      <>
      <h1>statistics</h1>
      <p>No feedback given</p>
     </>
    )
  }
  return (
    <>
     <h1>statistics</h1>
     <Statistic text="good" value={good} />
     <Statistic text="neutral" value={neutral} />
     <Statistic text="bad" value={bad} />
     <Statistic text="all" value={all} />
     <Statistic text="average" value={((good - bad) / all) || 0} />
     <Statistic text="positive" value={`${good / all * 100 || 0} %`} />
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button text="good" onClick={() => setGood(good + 1)} />
        <Button text="neutral" onClick={() => setNeutral(neutral + 1)} />
        <Button text="bad" onClick={() => setBad(bad + 1)} />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)