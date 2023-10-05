const Header = ({name}) => {
    return (
      <h1>{name}</h1>
    )
  }
  
  const Part = ({name, exercises}) => {
    return (
      <li>
        {name} {exercises}
      </li>
    )
  }
  
  const Content = ({parts}) => {
    return (
      <ul>
        {parts.map((part) => <Part key={part.id}  name={part.name} exercises={part.exercises} />)}
      </ul>
    )
  }
  
  const Course = ({course}) => {
    return (
      <>
        <Header name={course.name} />
        <Content parts={course.parts} />
      </>
      
    )
  }

  export default Course