import axios from "axios";

const getAll = () => {
    const request = axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
    return (
        request.then(r => r.data)
    )
}

const getCountry = (name) => {
    const request = axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`)
    return (
        request.then(r => r.data)
    )
}

export default {getAll, getCountry}