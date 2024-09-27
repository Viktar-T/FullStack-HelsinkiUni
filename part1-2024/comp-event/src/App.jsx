import { useState } from "react"

const Hello = ({name, age}) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - age
  }
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const Counter = () => {
  const [counter, setCounter] = useState(0)

  setTimeout(
    () => setCounter(counter + 1), 1000
  )
  console.log("rendering...", counter)
  return <p>Counter = {counter} </p>
}

const Display = ({num}) => {
  return <p>Number of Clicks = {num}</p>
}

const Button = ({funName, buttonText, counter}) => {
  console.log(`${buttonText} was clicked. Counter = ${counter}`)
  return <button onClick={funName}> {buttonText} </button>
}


const App = () => {
  const [counter, setCounter] = useState(0)
  const name = 'Peter'
  const age = 10

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setZero = () => setCounter(0)

  return (
    <div>
      <h1>---Greetings---</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <h1>---Counter---</h1>
      {/* <Counter /> */}
      <h1>---Event handler---</h1>
      <Display num={counter}/>
      <Button funName={increaseByOne} buttonText={"PlusButton"} counter={counter}/>
      <Button funName={setZero} buttonText={"setZero"} counter={counter}/>
      <Button funName={decreaseByOne} buttonText={"MinusButton"} counter={counter}/>      
    </div>
  )
}

export default App
