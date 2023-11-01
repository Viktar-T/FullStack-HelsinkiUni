import { useState, useEffect } from 'react'
import axios from 'axios' 
import {CountriesMessage} from "./components/components"

function App() {
  const [value, setValue] = useState('')
  const [countriesInfo, setCountriesInfo] = useState([])

  useEffect(() => {
    axios
    .get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then(resp => {
      setCountriesInfo(resp.data)
    })
  }, [])

  const handleChange = (event) => {
    setValue(event.target.value)   
  }

  return (
    <>
      <form>
        find countries <input value={value} onChange={handleChange} />
      </form>
      <CountriesMessage countriesInfo={countriesInfo} value={value} />
    </>
  )
}

export default App
