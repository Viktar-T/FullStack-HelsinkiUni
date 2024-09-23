
const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}

const Content = ({name, number}) => {
  return (
    <p>{name} {number}</p>
  )
}

const Total = ({number}) => {
  return (
    <p>Number of exercises {number}</p>
  )
}

const App = () => {
  const courses = {
    coursename: "Half Stack application development",
    content: [
      ["part1", "Fundamentals of React", 10],
      ["part2", "Using props to pass data", 7],
      ["part3", "State of a component", 14]
    ]
  }

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header course={courses[0].coursename} />

      <Content name={part1} number={exercises1} />
      <Content name={part2} number={exercises2} />
      <Content name={part3} number={exercises3} />
      <Total number={exercises1 + exercises2 + exercises3} />
    </>
  )
}

export default App
