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
      <Part part={part3} exercise={exercise3} />
    </div>
  );
};
const Total = ({ exercise1, exercise2, exercise3 }) => {
  return (
    <div>
      <p>Total {exercise1 + exercise2 + exercise3}</p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />

      <Content part1={parts[0].name} exercise1={parts[0].exercises} />
      <Content part2={parts[1].name} exercise2={parts[1].exercises} />
      <Content part3={parts[2].name} exercise3={parts[2].exercises} />

      <Total
        exercise1={parts[0].exercises}
        exercise2={parts[1].exercises}
        exercise3={parts[2].exercises}
      />
    </div>
  );
};

export default App;
