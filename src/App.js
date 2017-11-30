import React, { Component } from 'react';
import './App.css';
import StockInfo from './components/StockInfo'
import { loadQuoteForStock } from './api/iex'

//yarn add axios, for axios

loadQuoteForStock('nflx')
  .then((quote) => {
    console.log('Loaded Netflix', quote)
  })

class App extends Component {
  state = {
    error: null,
    enteredSymbol: 'NFLX',
    quote: null
  }

  // The first time our component is rendered
  // this method is called
  componentDidMount() {
    loadQuoteForStock('nflx')
      .then((quote) => {
        this.setState({ quote: quote })
      })
      .catch((error) => {
        // 404 not found
        if (error.response.status === 404) {
          error = new Error('The stock symbol does not exist')
        }
        this.setState({ error: error })
        console.log('Error loading quote', error)
      })
  }

  render() {
    const { error, enteredSymbol, quote } = this.state


    return (
      <div className="App">
        <h1>Wolf of React</h1>

        <input value={enteredSymbol} placeholder='Symbol e.g. NFLX' aria-label='Symbol' />

        {
          !!error && // Conditional that must pass
          <p>{error.message}</p>
        }
        {
          !!quote ? (
            <StockInfo
              symbol={quote.symbol}
              companyName={quote.companyName}
              latestPrice={95}
              latestSource='Close'
              week52High={100}
              week52Low={90}
            />
          ) : (
              <p className="animate">Loading...</p>
            )
        }
      </div>
    );
  }
}

export default App;
