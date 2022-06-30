const Statistics = (props) => {
  const { good, bad, neutral, sum, average, positive } = props;
  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {sum}</p>
      <p>average {average}</p>
      <p>positive {positive}</p>
    </div>
  );
};
export default Statistics;
