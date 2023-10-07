const Phonebook = ({addPerson, newName, newPhone, insertName, insertPhone}) => {
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

const Numbers = ({persons}) => {
    return (
        <>
            <h2>Numbers</h2>
            <ul>
                {persons.map((person) => <li key={person.id}>{person.name}: {person.phone}</li>)}
            </ul>
        </>
    )
}

export {Phonebook, Numbers}