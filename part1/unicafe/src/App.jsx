import { useState } from 'react'
import {Hello, ButtonA, NewAge, Separator} from "./components/hello"

function App() {
  const [index, setIndex] = useState(0)
  const [person, setPerson] = useState(0)

  const onClickA = () => {
    setIndex(index + 1)
  }

  const onClickB = () => {
    setPerson(person + 1)
  }

  const people = [
    {name: "Viktar", age: 40},
    {name: "Kiryl", age: 8}
  ]
  const name = people[person].name
  const age = people[person].age

  return (
    <>
      <Hello name={people[0].name} age={people[0].age}/>
      <Separator />

      <ButtonA func={onClickA} name={"+1 year"}/>
      <NewAge name={people[0].name} age={people[0].age + index}/>
      <Separator />

      <ButtonA func={onClickB} name={"next persone"}/>
      <Hello name={name} age={age}/>
      <Separator />
    </>
  )
}

export default App
