const PersonForm = ({addPerson, newName, newPhone, insertName, insertPhone}) => {
    return (
        <>
            <form onSubmit={addPerson}>
            <div>
                name: <input value={newName} onChange={insertName}/>
            </div>
            <div>
                phone: <input value={newPhone} onChange={insertPhone}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
            </form>
        </>
    )
}

const Filter = ({filterName, filterPersons}) => {
    return (
        <>
            <label>filter shown with</label>
            <input value={filterName} onChange={filterPersons} />
        </>
    )
    
}

const Persons = ({filteredPersons, delFunc}) => {
    return (
        <>
            <ul>
                {
                filteredPersons.map((person) => <li key={person.id}>
                    {person.name}: {person.number} 
                    <button onClick={() => delFunc(person.id)}>delete {person.id}</button>
                    </li>)
                }
            </ul>
        </>
    )
}

const Button = (func) => {
    return (
        <button onClick={func}>delete</button>
    )
}

export {PersonForm, Persons, Filter, Button}