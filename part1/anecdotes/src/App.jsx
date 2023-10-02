import { useState } from 'react'

const Button = ({func, text}) => {
  return <button onClick={func} >{text}</button>
}

const Day = ({anecdote, maxVotes}) => {
  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{anecdote}</p>
      <p>has {maxVotes} votes</p>
    </>
  )
}

const MostVotes = ({bestAnecdote, maxVotes}) => {
  return (
    <>
      <h1>Anecdote with most votes</h1>
      <p>{bestAnecdote}</p>
      <p>has {maxVotes} votes</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [maxIndNum, setMaxIndNum] = useState({
    maxNum: 0,
    maxInd: 0
  })

  const handleClick = () => {
    const rndm = Math.round(Math.random() * (anecdotes.length - 1))
    setSelected(rndm)
    console.log(rndm)
  }

  const handleVoteClick = () => {
    const copyVotes = [...votes];
    copyVotes[selected] += 1;
    setVotes(copyVotes);
    console.log(copyVotes, selected);
    const maxNumber = Math.max(...copyVotes);
    const maxIndex = copyVotes.indexOf(maxNumber);
    setMaxIndNum({maxNum: maxNumber, maxInd: maxIndex})
  }


  return (
    <div>
      <Day anecdote={anecdotes[selected]} maxVotes={votes[selected]}/>
      <Button func={handleVoteClick} text={"vote"} />
      <Button func={handleClick} text={"next anecdote"} />
      <MostVotes bestAnecdote={anecdotes[maxIndNum.maxInd]} maxVotes={maxIndNum.maxNum}/>     
    </div>
  )
}

export default App
