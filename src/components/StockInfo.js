import React from 'react'

function StockInfo({
  symbol, // AAPL
  week52High, //176.24
  week52Low,  // 108.25
  latestPrice,  // 169.48
  companyName, // Apple Inc
  latestSource, // Close
}) {
  return (
    <div>
      <h2> {symbol}: {companyName} </h2>
      <h3>{latestPrice}({latestSource})</h3>
      <dl>
        <dt>Week 52 high</dt>
        <dd>{week52High}</dd>

        <dt>Week 52 low</dt>
        <dd>{week52Low}</dd>

      </dl>
    </div>
  )
}

export default StockInfo