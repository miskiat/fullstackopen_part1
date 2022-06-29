const Header = ({ course }) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
};
const Part = ({ part, exercise }) => {
  return (
    <p>
      {part} {exercise}
    </p>
  );
};
const Content = ({ part1, exercise1, part2, exercise2, part3, exercise3 }) => {
  return (
    <div>
      <Part part={part1} exercise={exercise1} />
      <Part part={part2} exercise={exercise2} />
      <Part part={part2} exercise={exercise3} git />
    </div>
  );
};
const Total = ({ exercises1, exercises2, exercises3 }) => {
  return (
    <div>
      <p>Total {exercises1 + exercises2 + exercises3}</p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercise1={exercises1} />
      <Content part2={part2} exercise2={exercises2} />
      <Content part3={part3} exercise3={exercises3} />

      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
};

export default App;
