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
      <p>Function1 - {n1}</p>
      <p>Function1 - {s1}</p>
      <p>Function1 - {color}</p>
    </div>    
  )
}

const App = () => {
  console.log("hello from the main const 'App' ")
  const now = new Data()
  return (
    <div>
      <p>Hello world, </p>
      <Portfolio size={300}/>
      <Portfolio size={200}/>
      <Portfolio size={100}/>
      <Func1 name={"NAME"} size={100} color={"BLUE"}/>
      <Func1 name={"NAME-2"} size={1000} color={"BLUE-2"}/>
    </div>
    
  )
}


export default App
