import { paste } from "@testing-library/user-event/dist/paste"

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
        {props.parts.map(value => (<p> {value.name} {value.exercises}</p>))}
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p> Number of exercices {props.parts[0].exercises +
      props.parts[1].exercises + props.parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name:'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} /> 
      <Total parts={parts} />
    </div>
  )
}
export default App