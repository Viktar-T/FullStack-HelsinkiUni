import { useState } from 'react'
import {Hello, NewAge, SculptorChange, ButtonA, ButtonImg, Separator} from "./components/hello"
import { buttonNames, sculptureList } from './components/data'

function App() {
  const [index, setIndex] = useState(0)
  const [person, setPerson] = useState(0)
  const [sculptor, setSculptor] = useState(0)

  const onClickA = (buttonName) => {
    console.log("Parameter to conClickA:", buttonName)
    if (buttonName === buttonNames[1]) {
      setIndex(index - 1)
    } else if (buttonName === buttonNames[2]) {
      setIndex(index + 10)
    } else if (buttonName === buttonNames[3]) {
      setPerson(person + 1)
      setIndex(0)
    } else if (buttonName === buttonNames[4]) {
      setSculptor(sculptor + 1)
    }
      else {
      setIndex(index + 1)
  }
}

  const people = [
    {name: "Viktar", age: 40},
    {name: "Nastya", age: 39},
    {name: "Kiryl", age: 8},
    {name: "Iryna", age: 14},
    {name: "Palina", age: 11},
  ]
  const name = people[person].name
  const age = people[person].age

  return (
    <>
      <ButtonA func={onClickA} buttonName={buttonNames[3]}/>
      <Hello name={name} age={age}/>
      <Separator />
 
      <ButtonA func={onClickA} buttonName={buttonNames[0]}/>
      <ButtonA func={onClickA} buttonName={buttonNames[1]}/>
      <ButtonA func={onClickA} buttonName={buttonNames[2]}/>
      <NewAge name={name} age={age + index}/>
      <Separator />


      <ButtonA func={onClickA} buttonName={buttonNames[4]} /> 
      <ButtonImg func={onClickA} buttonName={buttonNames[4]} scList={sculptureList} scIndex={sculptor} />
      <SculptorChange scList={sculptureList} scIndex={sculptor} />
      
      <Separator />      
    </>
  )
}

export default App
