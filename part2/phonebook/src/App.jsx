import { useState } from 'react'
import { PersonForm, Persons, Filter/*  */} from './components/components'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filterName, setFilterName] = useState('')
  const [filteredPersons, setFilteredPersons] = useState(persons)

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

      <Persons filteredPersons={filteredPersons} />   
    </div>
  )
}

export default App