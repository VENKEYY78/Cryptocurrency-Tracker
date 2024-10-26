import './index.css'

const CryptocurrencyItem = props => {
  const {eachBitCoinDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = eachBitCoinDetails

  return (
    <li>
      <div className="list-container">
        <div className="left-side">
          <img
            src={currencyLogo}
            alt={currencyName}
            className="currencyImage"
          />
          <p className="currency-name">{currencyName}</p>
        </div>
        <div className="right-side">
          <p className="rupes-usd">{usdValue}</p>
          <p className="rupes-euro">{euroValue}</p>
        </div>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
