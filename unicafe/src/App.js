import React, { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function addGood() {
    setGood(good + 1);
  }

  function addNeutral() {
    setNeutral(neutral + 1);
  }

  function addBad() {
    setBad(bad + 1);
  }

  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = `${(good / all) * 100}%`;
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={addGood}>good</button>
      <button onClick={addNeutral}>neutral</button>
      <button onClick={addBad}>bad</button>
      <h3>Statistics</h3>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}</p>
    </div>
  );
};

export default App;
