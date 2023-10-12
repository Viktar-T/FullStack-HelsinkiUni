import { useState, useEffect } from 'react'
import { PersonForm, Persons, Filter/*  */} from './components/components'
import axios from "axios"


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filterName, setFilterName] = useState('')
  const [filteredPersons, setFilteredPersons] = useState(persons)

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        const data = response.data
        setPersons(data)
        setFilteredPersons(data)
        console.log("truger useEffect", data)
      })
  }, [])
  console.log("persons: ", persons)
  

  const checkExist = (name) => {
    const names = persons.map((person) => person.name)
    if (names.includes(name)) {
      alert(`${name} is already added to phonebook`)
      return true
    }
    return false
  }

  const addPerson = (event) => {
    event.preventDefault()
    if (checkExist(newName)) {return;}

    const newPersoneObj = {
      id: persons.length + 1, 
      name: newName, 
      number: newPhone
    }
    const newPersonArray = persons.concat(newPersoneObj)
    setPersons(newPersonArray)
    setFilteredPersons(newPersonArray)
    setNewName("")
    setNewPhone("")
  }

  const insertName = (event) => {
    setNewName(event.target.value)
  }

  const insertPhone = (event) => {
    setNewPhone(event.target.value)
  }

  const filterPersons = (event) => {
    const tValue = event.target.value
    setFilterName(tValue)
    const tValueLowerCase = tValue.toLowerCase()
    const filtered = persons.filter((person) => person.name.toLowerCase().includes(tValueLowerCase))
    setFilteredPersons(filtered)    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} filterPersons={filterPersons}/>
      
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} newPhone={newPhone} 
      insertName={insertName} insertPhone={insertPhone} 
      />

      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} />   
    </div>
  )
}

export default App