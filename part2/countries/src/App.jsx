import { useState, useEffect } from 'react'
import {TooManyMessage, CountriesListMessage, TheCountryMessage} from "./components/components"
import request from "./services/service"

function App() {
  const [value, setValue] = useState('')
  const [countriesInfo, setCountriesInfo] = useState([])
  const [countryInfo, setCountryInfo] = useState({})
  const [firstMessage, setFirstMessage] = useState(true)
  const [countriesListWithValue, setCountriesListWithValue] = useState([])
  const [selectedCountry, setSelectedCountry] = useState('')

  useEffect(() => {
    request.getAll().then(data => setCountriesInfo(data))
  }, [])


  useEffect(() => {
    console.log("----- setCountryInfo(data) ----", "selectedCountry:", selectedCountry)
    if (selectedCountry) {
      request.getCountry(selectedCountry).then(data => {
      setCountryInfo(data)
    })
    }    
  }, [selectedCountry])

  const handleChange = (event) => {
    const currentValue = event.target.value
    setValue(currentValue)

    const countriesList = countriesInfo.map(item => item.name.common)
    const countriesListWithValue = countriesList.filter(c => c.includes(currentValue))

    if (countriesListWithValue.length > 10) {
      setFirstMessage(true)
      setSelectedCountry('')
      setCountriesListWithValue([])
      setCountryInfo({})
    } else if (countriesListWithValue.length > 1) {
      setFirstMessage(false)
      setSelectedCountry('')
      setCountriesListWithValue(countriesListWithValue)
      setCountryInfo({})
    } else if (countriesListWithValue.length === 1) {
      setFirstMessage(false)
      setSelectedCountry(countriesListWithValue[0]) 
      setCountriesListWithValue([])           
    }
  }

  return (
    <>
      <form>
        find countries <input value={value} onChange={handleChange} />
      </form>
      <TooManyMessage display={firstMessage} />
      <CountriesListMessage countriesListWithValue={countriesListWithValue} />
      <TheCountryMessage countryInfo={countryInfo}/>
    </>
  )
}

export default App
