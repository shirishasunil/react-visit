import './index.css'

const VisitedCountries = props => {
  const {visitedCountriesDetails, removeVisitCountry} = props
  const {id, imageUrl, name} = visitedCountriesDetails

  const onClickRemoveCountry = () => {
    removeVisitCountry(id)
  }
  return (
    <li className="visited-list-item">
      <img src={imageUrl} alt="thumbnail" className="image" />
      <div className="name-btn-container">
        <p className="country-name">{name}</p>
        <button
          type="button"
          className="remove-btn"
          onClick={onClickRemoveCountry}
        >
          Remove
        </button>
      </div>
    </li>
  )
}
export default VisitedCountries
