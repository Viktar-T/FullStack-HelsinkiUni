import {OneFunc1, OneFunc2} from "./components/one.jsx"
import TodoList from "./components/two.jsx"

const Portfolio = ({size}) => {
  console.log("hello from const 'Portfolio' ")
  return (
    <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
      width={size}
      height={1.2*size}
    />
  )
}

function Func1 ({name="N", size=10, color="blue"}) {
  console.log("hello from function 'Func1' ")
  const s1 = size*2
  const n1 = name + " + constant"
  return (
    <div>
      <p>Function1 - {n1 + 1000}</p>
      <p>Function1 - {s1}</p>
      <p>Function1 - {color}</p>
    </div>    
  )
}

const App = () => {
  console.log("hello from the main const 'App' ")
  // const now = new Data()
  const size1 = 300;
  const size2 = 200;
  const size3 = 100;
  return (
    <>
      <p>Hello world, </p>
      <Portfolio size={size1}/>
      <Portfolio size={size2}/>
      <Portfolio size={size3}/>
      <Func1 name={"NAME"} size={100} color={"BLUE"}/>
      <Func1 name={"NAME-2"} size={1000} color={"BLUE-2"}/>
      <h2>---Import from  components/one.jsx----</h2>
      <OneFunc1 name="props.name in function OneFunc2" size={10}/>
      <OneFunc2 name={"props.name in function OneFunc2"}/>
      <h2>---Import from  components/two.jsx----</h2>
      <TodoList />
    </>
    
  )
}


export default App
