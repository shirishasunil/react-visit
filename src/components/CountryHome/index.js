import {Component} from 'react'
import CountriesList from '../CountriesList'
import VisitedCountries from '../VisitedCountries'

import './index.css'

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]
console.log(initialCountriesList)
class CountryHome extends Component {
  state = {listOfCountries: initialCountriesList}

  addCountry = id => {
    const {listOfCountries} = this.state
    const country = listOfCountries.map(each => {
      if (each.id === id) {
        const newCountries = {...each, isVisited: !each.isVisited}
        return newCountries
      }
      return each
    })
    this.setState({listOfCountries: country})
  }

  removeVisitCountry = id => {
    const {listOfCountries} = this.state
    const removeCountryItem = listOfCountries.map(eachCountry => {
      if (eachCountry.id === id) {
        const removeCountry = {
          ...eachCountry,
          isVisited: !eachCountry.isVisited,
        }
        return removeCountry
      }
      return eachCountry
    })
    this.setState({listOfCountries: removeCountryItem})
  }

  render() {
    const {listOfCountries} = this.state
    const updatedCountryList = listOfCountries.filter(
      eachCountry => eachCountry.isVisited === true,
    )
    return (
      <>
        <div className="country-home-container">
          <div className="responsive-home-container">
            <h1 className="country-heading">Countries</h1>
            <ul className="countries-list-container">
              {listOfCountries.map(eachCountry => (
                <CountriesList
                  key={eachCountry.id}
                  countryDetails={eachCountry}
                  addCountry={this.addCountry}
                />
              ))}
            </ul>
            <h1 className="country-heading">Visited Countries</h1>
            <ul className="visited-country-list">
              {updatedCountryList.length === 0 ? (
                <p className="no-countries">No Countries Visited Yet!</p>
              ) : (
                updatedCountryList.map(eachItem => (
                  <VisitedCountries
                    key={eachItem.id}
                    visitedCountriesDetails={eachItem}
                    removeVisitCountry={this.removeVisitCountry}
                  />
                ))
              )}
            </ul>
          </div>
        </div>
      </>
    )
  }
}
export default CountryHome
