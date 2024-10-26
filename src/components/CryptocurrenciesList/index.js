import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    cryptoCurrency: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCurrencyList()
  }

  // https://apis.ccbp.in/crypto-currency-converter

  getCurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)

    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
    }))
    this.setState({cryptoCurrency: updatedData, isLoading: false})
  }

  render() {
    const {cryptoCurrency, isLoading} = this.state

    return (
      <div className="app-main-bg-container">
        <div className="top-container">
          <h1 className="heading">Cryptocurrency Tracker</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="cryptocurrency"
            className="logo"
          />
        </div>
        <div className="Cion-type-container">
          <div className="top-section">
            <h1 className="coin">Coin Type</h1>
            <div className="currency-container">
              <p className="coin">USD</p>
              <p className="coin">EURO</p>
            </div>
          </div>
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="Rings" color="#ffffff" height={80} width={80} />
            </div>
          ) : (
            <ul className="list-of-currency">
              {cryptoCurrency.map(eachBitCoin => (
                <CryptocurrencyItem
                  eachBitCoinDetails={eachBitCoin}
                  key={eachBitCoin.id}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
