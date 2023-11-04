const TooManyMessage = ({display}) => {
  if (display) {
    return <p>Too many matches, specify another filter</p>
  }  
}

const CountriesListMessage = ({countriesListWithValue, handleClick}) => {
  return (
    <ul>
        {countriesListWithValue.map(
          (c, index) => <li key={index}>
            {c} <button onClick={() => handleClick(c)}>show</button>
            </li>
          )}
    </ul>
  )
}

const Flag = ({ flag }) => {
  return (
    <div>
      <img src={flag.png} alt={flag.alt} />
    </div>
  );
};


const TheCountryMessage = ({countryInfo, weather}) => {
  if (countryInfo.name) {
    return (
    <>
      <h1>{countryInfo.name.common}</h1>
      <p>capital {countryInfo.capital}</p>
      <p>area {countryInfo.area}</p>
      <h4>languages: </h4>
      <ul>
        {Object.entries(countryInfo.languages).map(([key, v]) => <li key={key}>{v}</li>)}
      </ul>
      <Flag flag={countryInfo.flags} />
      <h1>Weather in {countryInfo.capital}</h1>
      <p>temperature {weather.temp} Celsius</p>
      <p>wind {weather.wind_speed} m/s</p>
    </>
  )
  }
  
}


export {TooManyMessage, CountriesListMessage, TheCountryMessage}