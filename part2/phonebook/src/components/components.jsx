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

const SuccessAddNotification = ({message}) => {
    const styleMessage = (color) => {
    return({
        color: color,
        background: "lightgrey",
        fontSize: 20,
        borderStyle: "solid",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    })
}

    if (message.text === null) {
        return null
    } else {
        const color = message.color
        return <p className="successAddNotific" style={styleMessage(color)}>{message.text}</p>
    }
}

export {PersonForm, Persons, Filter, Button, SuccessAddNotification}