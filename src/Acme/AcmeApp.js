import React from 'react';
import DATA from './ACMEDATA';

const AcmeInfo= () => {
  const acmeStats = DATA.information.map(function(item){
      return (
        <div>
          <h3> {item.title }</h3>
        </div>

      )
  })
  return (
    <div>
      { acmeStats}
    </div>
  )
}

const AcmeApp = () => {
  const acmeItems = DATA.customers.map(function(item){
    return (
      <div>
        <h1> { item.name }</h1>
        <p> { item.email }</p>
      </div>

    )
  })
  return (
    <div>
      { acmeItems }
    </div>
  )
}

export default AcmeApp;
