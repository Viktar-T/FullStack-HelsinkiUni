import { useState } from 'react'




const Button = ({clickHandler, text}) => {
  return (
    <button onClick={clickHandler}>{text}</button>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [stat, setStat] = useState(
    {
      good: 0,
      neutral: 0,
      bad: 0
    }
  )

  const handleClick = (text) => () => {
    console.log(stat)
    setStat(...stat, stat.good + 1)
    if (text === "good") {
      setStat(...stat, stat.good + 1)
    } 
  }

  const handGood = () => {
    setGood(good + 1)
  }

  const handNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handBad = () => {
    setBad(bad + 1)
  }

  return (
    <>
      <h1>give feedback</h1>
      <Button clickHandler={handGood} text={"good"} />
      <Button clickHandler={handNeutral} text={"neutral"} />
      <Button clickHandler={handBad} text={"bad"} />
      <h1>statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>  
    </>
  )
}


export default App