import { useState } from 'react'

const texts = ["good", "neutral", "bad"]


const Button = ({clickHandler, text}) => {
  return (
    <button onClick={clickHandler}>{text}</button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td width={50}>{text}</td> 
      <td>{value} </td>
    </tr>
  ) 
}

const Statistics = ({stat}) => {
  if (stat.good + stat.neutral + stat.bad === 0) {
    return <p>No feedback given</p>
  }
  const all = stat.good + stat.neutral + stat.bad
  const average = ((stat.good - stat.bad) / (stat.good + stat.neutral + stat.bad)).toFixed(1)
  const positive = ((stat.good / (stat.good + stat.neutral + stat.bad)) * 100).toFixed(1)
  return (
    <table>
      <thead></thead>
      <tbody>
        <StatisticLine text={"good"} value={stat.good} />
        <StatisticLine text={"neural"} value={stat.neutral} />
        <StatisticLine text={"bad"} value={stat.bad} />
        <StatisticLine text={"all"} value={all} />
        <StatisticLine text={"average"} value={average} />
        <StatisticLine text={"positive"} value={positive + " %"} />
      </tbody>
      
    </table>    
  )
}

const App = () => {
  const [stat, setStat] = useState(
    {
      good: 0,
      neutral: 0,
      bad: 0
    }
  )
 
  const handleClick = (text) => () => {
    
    if (text === "good") {
      const g = stat.good + 1
      setStat({...stat, good: g})
    } else if (text === "neutral") {
      const n = stat.neutral + 1
      setStat({...stat, neutral: n})
    } else if (text === "bad") {
      const b = stat.bad + 1
      setStat({...stat, bad: b})
    }

    console.log(stat)
  }

  return (
    <>
      <h1>give feedback</h1>
      <Button clickHandler={handleClick(texts[0])} text={texts[0]} />
      <Button clickHandler={handleClick(texts[1])} text={texts[1]} />
      <Button clickHandler={handleClick(texts[2])} text={texts[2]} />
      <h1>statistics</h1>
      <Statistics stat={stat}/>
    </>
  )
}


export default App