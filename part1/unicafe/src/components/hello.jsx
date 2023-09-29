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

const SculptorChange = ({scList, scIndex, imgSize}) => {
    const sculpture = scList[scIndex]
    return (
        <>
            <h2>{sculpture.name}</h2>
            <h4>({scIndex} of {scList.length})</h4>
            <img src={sculpture.url} alt={sculpture.alt} width={imgSize} height={imgSize} />
            <p>{sculpture.description}</p>
        </>
    )
}

const ButtonA = ({func, buttonName}) => {
    return (
        <>
            <button onClick={() => func(buttonName)}>{buttonName}</button>
        </>
    )
}

const ButtonImg = ({func, buttonName, scList, scIndex}) => {
    const sculpture = scList[scIndex]
    return (
        <>
            <button onClick={() => func(buttonName)}>
                <img src={sculpture.url} alt={sculpture.alt} width={100} height={100} />
            </button>
        </>
    )
}

const Separator = () => {
    return (
        <h2>--------------------</h2>
    )
}


export {Hello, NewAge, SculptorChange, ButtonA, ButtonImg, Separator}