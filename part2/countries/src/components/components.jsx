
const CountriesMessage = ({countriesInfo, value}) => {
    const countriesList = countriesInfo.map(item => item.name.common)
    const countriesListWithValue = countriesList.filter(c => c.includes(value))
    console.log("countriesListWithValue:", countriesListWithValue)
    if (countriesListWithValue.length > 10) {
        return "Too many matches, specify another filter"
      } else if (countriesListWithValue.length > 1) {
        return (
        <ul>
            {countriesListWithValue.map((c, index) => <li key={index}>{c}</li>)}
        </ul>
        )
      } else if (countriesListWithValue.length === 1) {
        return (
            <h1>{countriesListWithValue[0]}</h1>
        )
      }


    
}


export {CountriesMessage}