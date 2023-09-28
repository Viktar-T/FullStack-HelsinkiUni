const Hello = ({name, age}) => {
    return (
        <>
            <h3>Hello {name}. You are {age} years old</h3>
        </>
    )
}

const NewAge = ({name, age}) => {
    return (
        <>
            <h3>Hello {name}. You are {age} years old NOW</h3>
        </>
    )
}

const ButtonA = ({func, name}) => {
    return (
        <>
            <button onClick={func}>{name}</button>
        </>
    )
}

const Separator = () => {
    return (
        <h2>--------------------</h2>
    )
}


export {Hello, ButtonA, NewAge, Separator}