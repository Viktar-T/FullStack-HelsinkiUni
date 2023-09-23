
const Header = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.part} {props.exercise}
    </div>
  )
}

const Content2 = (props) => {
  return (
    <div>
      <Part part={props.allcontent[0].part} exercise={props.allcontent[0].exercises}/>
      <Part part={props.allcontent[1].part} exercise={props.allcontent[1].exercises}/>
      <Part part={props.allcontent[2].part} exercise={props.allcontent[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  /* const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14 */

  const contentArray = [
    {part: 'Fundamentals of React', exercises: 10},
    {part: 'Using props to pass data', exercises: 7},
    {part: 'State of a component', exercises: 14},
  ]

  return (
    <div>
      <Header name={course} />
      {/* <Content part={part1} exercise={exercises1} />
      <Content part={part2} exercise={exercises2} />
      <Content part={part3} exercise={exercises3} /> 
      <Total total={exercises1 + exercises2 + exercises3} /> */}

      <Content2 allcontent={contentArray}/>
      <Total total={contentArray[0].exercises + contentArray[1].exercises + contentArray[2].exercises} />
    </div>
  )
}

export default App
