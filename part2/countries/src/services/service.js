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

const getWether = (lat, lon) => {
    /* const lat = "33.44"
    const lon = "-94.04" */
    console.log("lat2:", lat, "  lon2:", lon)
    const part = "hourly,daily"
    const APIkey = "d3187454a4968eb3023067c47581da3b"

    const request = axios
    .get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${APIkey}`)
    
    return request.then(resp => resp.data)
}

export default {getAll, getCountry, getWether}