
const Header = ({course}) => {
  console.log("Rendering Header with course:", course)
  return (
    <h1>{course}</h1>
  )
}

const Part = ({name, exercises}) => {
  return (
    <p>{name} {exercises}</p>
  )
}

const Content = ({content}) => {
  return (
    <>
    <Part name={content[0].name} exercises={content[0].exercises} />
    <Part name={content[1].name} exercises={content[1].exercises} />
    <Part name={content[2].name} exercises={content[2].exercises} />
    </>
  )
}

const Content2 =({content}) => {
  return (
    <>
      {content.map((item, index) => (
        <Part key={index} name={item.name} exercises={item.exercises} />
      ))}
    </>
  )
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

  return (
    <>
      <Header course={courses.courseName} />     
      <Content content={courses.content} />
      <h3>---Content2---map()---</h3>
      <Content2 content={courses.content} />
      <h3>---Total---</h3>
      <Total2 content={courses.content} />
    </>
  )
}

export default App
