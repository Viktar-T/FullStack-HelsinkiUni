import { useState } from 'react'

const texts = ["good", "neutral", "bad"]


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
    
    if (text === "good") {
      setStat({...stat, good: stat.good + 1})
    } else if (text === "neutral") {
      setStat({...stat, neutral: stat.neutral + 1})
    } else if (text === "bad") {
      setStat({...stat, bad: stat.bad + 1})
    }
    console.log(stat)
  }

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <>
      <h1>give feedback</h1>
      <Button clickHandler={handleGood} text={"good"} />
      <Button clickHandler={handleNeutral} text={"neutral"} />
      <Button clickHandler={handleBad} text={"bad"} />
      <h1>statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>  
      <p>---------------</p>
      <h1>give feedback</h1>
      <Button clickHandler={handleClick(texts[0])} text={texts[0]} />
      <Button clickHandler={handleClick(texts[1])} text={texts[1]} />
      <Button clickHandler={handleClick(texts[2])} text={texts[2]} />
      <h1>statistics</h1>
      <p>Good {stat.good}</p>
      <p>Neural {stat.neutral}</p>
      <p>Bad {stat.bad}</p>
      {/* <p>Neutral {neutral}</p>
      <p>Bad {bad}</p> */}
    </>
  )
}


export default App