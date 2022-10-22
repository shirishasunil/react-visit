import './index.css'

const CountriesList = props => {
  const {countryDetails, addCountry} = props
  const {id, name, isVisited} = countryDetails

  const visitedCountry = isVisited ? 'Visited' : 'Visit'
  const visitBtn = isVisited ? 'visited-button' : 'button visit-button'
  const onClickAddCountry = () => {
    addCountry(id)
  }

  console.log(countryDetails)
  return (
    <li className="country-list-item">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p className="visited">{visitedCountry}</p>
      ) : (
        <button type="button" className={visitBtn} onClick={onClickAddCountry}>
          {visitedCountry}
        </button>
      )}
    </li>
  )
}

export default CountriesList
