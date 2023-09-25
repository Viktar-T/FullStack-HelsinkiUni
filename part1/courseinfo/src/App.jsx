
const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.name}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Part3 = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
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
      <Part3 part={props.allcontent[0].part} exercise={props.allcontent[0].exercises}/>
      <Part3 part={props.allcontent[1].part} exercise={props.allcontent[1].exercises}/>
      <Part3 part={props.allcontent[2].part} exercise={props.allcontent[2].exercises}/>
    </div>
  )
}

const Content3 = (props) => {
  return (
    <div>
      {/* for (let i=0; i<props.allcontent.length -1; ) */}
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises}/>
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises}/>
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises}/>


    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
}

const Total2 = (props) => {
  /* const parts = props.parts
  const total1 = parts[0].exercises + parts[1].exercises + parts[2].exercises;

  let total2 = 0;
  for (let i=0; i<parts.length; i++) {
    total2 += parts[i].exercises
  } */

  let total3 = 0;
  props.parts.forEach(element => {
    total3 += element.exercises
  });
  return (
    <>
      {/* <p>Number of exercises {total1}</p>
      <p>Number of exercises {total2}</p> */}
      <p>Number of exercises {total3}</p>
    </>
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
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]}

  return (
    <div>
      <Header name={course.name} />
      <Content3 parts={course.parts} />
      <Total2 parts={course.parts} />
    </div>
  )
}

export default App
