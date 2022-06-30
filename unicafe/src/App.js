import React, { useState } from "react";
import Statistics from "./Statistics";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = `${(good / all) * 100}%`;
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>

      {all != 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          sum={all}
          average={average}
          positive={positive}
        />
      ) : (
        "No feedback given"
      )}
    </div>
  );
}
