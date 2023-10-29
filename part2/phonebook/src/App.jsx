import { useState, useEffect } from 'react'
import { PersonForm, Persons, Filter, Button, SuccessAddNotification} from './components/components'
import personService from "./services/persons"


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filterName, setFilterName] = useState('')
  const [filteredPersons, setFilteredPersons] = useState(persons)
  const [successMessage, setSuccessMessage] = useState({text: null, color: null})

  useEffect(() => {
    personService.getAll()
    .then(initialData => {
      console.log(initialData)
      setPersons(initialData)
      setFilteredPersons(initialData)
    })
  }, []) 

  const checkExist = (name) => {
    const person = persons.find(p => p.name === name)
    if (person) {
      return person     
    }
    return false
  }

  const addPerson = () => {  
    const newPersonObj = {
    id: persons.length + 1, 
    name: newName, 
    number: newPhone
  }
  const newPersonArray = persons.concat(newPersonObj)
  
  personService.create(newPersonObj).then(response => {
    setPersons(newPersonArray)
    setFilteredPersons(newPersonArray)
    setNewName("")
    setNewPhone("")
    setSuccessMessage({
      text: `Added ${newName}`, 
      color: "green",
    })
    setTimeout(() => setSuccessMessage({text: null, color: null}), 3000)
  })
  }

  const updatePerson = (person) => {
    const changedPerson = {...person, "number": newPhone}
    const changedPersonArray = persons.map(p => p.id === person.id ? changedPerson : p)
    personService.update(person.id, changedPerson).then(() => {
      setPersons(changedPersonArray)
      setFilteredPersons(changedPersonArray)
      setNewName("")
      setNewPhone("")
      setSuccessMessage({
        text:`Phone number of "${newName}" was changed to "${newPhone}"`,
        color: "green"
      })
      setTimeout(() => setSuccessMessage({text: null, color: null}), 3000)
    })
    .catch(error => {
      console.log("!!! error UPDATE !!!")
      setSuccessMessage({
        text: `Information of "${newName}" has already been removed from the server`,
        color: "red"
      })
      setTimeout(() => setSuccessMessage({text: null, color: null}), 3000)
    })

  }

  const addUpdatePerson = (event) => {
    event.preventDefault()
    /* const person = persons.find(p => p.name === newName); */
    const person = checkExist(newName)
    if (person) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with new one?`)) {
        updatePerson(person)        
      } else {return;}
    } else {addPerson()}
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

  const delFunc = (id) => {
    const person = persons.find(p => p.id === id)
    console.log(person)
    if (window.confirm(`Delete ${person.name}`)) {
      personService.del(id)
      .then(() => {
      const newPersonsList = persons.filter(p => p.id !== id)
      setPersons(newPersonsList)
      setFilteredPersons(newPersonsList)
    })
    .catch(error => {
      console.log("!!! error DEL !!!")
    
    })
  }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <SuccessAddNotification message={successMessage}/>
      <Filter filterName={filterName} filterPersons={filterPersons}/>
      
      <h2>add a new</h2>
      <PersonForm addPerson={addUpdatePerson} newName={newName} newPhone={newPhone} 
      insertName={insertName} insertPhone={insertPhone} 
      />

      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} delFunc={delFunc} />
    </div>
  )
}

export default App