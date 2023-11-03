const TooManyMessage = ({display}) => {
  if (display) {
    return <p>Too many matches, specify another filter</p>
  }  
}

const CountriesListMessage = ({countriesListWithValue}) => {
  return (
    <ul>
        {countriesListWithValue.map((c, index) => <li key={index}>{c}</li>)}
    </ul>
  )
}

const TheCountryMessage = ({countryInfo}) => {
  console.log("countryInfo1: ", countryInfo)
  if (countryInfo.name) {
    console.log("countryInfo2: ", countryInfo)
    return (
    <>
      <h1>{countryInfo.name.common}</h1>
      <p>capital {countryInfo.capital}</p>
      <p>area {countryInfo.area}</p>
      <h4>languages: </h4>
    </>
  )
  }
  
}


export {TooManyMessage, CountriesListMessage, TheCountryMessage}