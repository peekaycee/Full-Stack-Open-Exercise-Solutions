import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Total from './components/Total/Total';

/* eslint-disable react/prop-types */
const App = () => {
  const course = {
    name: 'Half Stack Application Development',
    parts: [
      {
        name: 'Fundamental of React',
        exercises: 10,
      },
      {
        name: 'Using Props to Pass Data',
        exercises: 7,
      },
      {
        name: 'State of a Component',
        exercises: 14,
      },
    ]
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} /> 
    </div>
  );
};

export default App;
