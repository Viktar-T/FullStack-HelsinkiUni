
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

const Part = ({name, exercises}) => {
  return (
    <p>{name} {exercises}</p>
  )
}

const Content2 = ({content}) => {
  return (
    <>
    <Part name={content[0].name} exercises={content[0].exercises} />
    <Part name={content[1].name} exercises={content[1].exercises} />
    <Part name={content[2].name} exercises={content[2].exercises} />
    </>
  )
}


const Content3 = ({content}) => {
  return (
    <>
    {content.map((item, index) => (
      <p key={index}>
        {item.name} {item.exercises}
      </p>
    ))}
    </>
  );
}

const Total = ({number}) => {
  return (
    <p>Number of exercises {number}</p>
  )
}

const Total2 = ({content}) => {
  let num = 0
  content.map((key) => {
    num += key.exercises
  })
  
  return (
    <p>Number of exercises {num}</p>
  )
}

const App = () => {
  const courses = {
    courseName: "Half Stack application development",
    content: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 }
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
      <Header course={courses.courseName} />     
      <Content name={part1} number={exercises1} />
      <Content name={part2} number={exercises2} />
      <Content name={part3} number={exercises3} />
      <Total number={exercises1 + exercises2 + exercises3} />
      <h3>---Content2---</h3>
      <Content2 content={courses.content} />
      <Total number={exercises1 + exercises2 + exercises3} />
      <h3>---Content3---map()---</h3>
      <Content3 content={courses.content} />
      <h3>---Total---</h3>
      <Total2 content={courses.content} />
    </>
  )
}

export default App
