import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  return (
    <>
     <h1>statistics</h1>
     <p>good {good}</p>
     <p>neutral {neutral}</p>
     <p>bad {bad}</p>
     <p>all {all}</p>
     <p>average {((good - bad) / all) || 0}</p>
     <p>positive {`${good / all * 100 || 0} %`}</p>
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
        <button onClick={() => setGood(good + 1)}>
          good
        </button>
        <button onClick={() => setNeutral(neutral + 1)}>
          neutral
        </button>
        <button onClick={() => setBad(bad + 1)}>
          bad
        </button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)