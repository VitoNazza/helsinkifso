import { paste } from "@testing-library/user-event/dist/paste"

const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
        {props.course.parts.map(value => (<p> {value.name} {value.exercises}</p>))}
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p> Number of exercices {props.course.parts[0].exercises +
      props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }
    return (
    <div>
      <Header course={course} />
      <Content course={course} /> 
      <Total course={course} />
    </div>
  )
}
export default App