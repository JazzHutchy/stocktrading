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
    quote: null
  }

  // The first time our component is rendered
  // this method is called
  componentDidMount() {
    loadQuoteForStock('nflx')
      .then((quote) => {
        this.setState({ quote: quote })
      })
  }

  render() {
    const { quote } = this.state


    return (
      <div className="App">
        <h1>Wolf of React</h1>
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
              <p>Loading...</p>
            )
        }
      </div>
    );
  }
}

export default App;
