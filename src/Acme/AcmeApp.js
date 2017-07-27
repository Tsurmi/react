import React from 'react';
import DATA from './ACMEDATA';

const AcmeInfo = (props) => {
  return (
    <div className="acme-info">
      <h1> { props.title }</h1>
      <p> { props.street }</p>
      <h3> { props.city }</h3>
      <p> { props.state }</p>
      <h5> { props.zip } </h5>
      <p>  { props.phoneNumber }</p>
    </div>
  )
}

const AcmeItems = () => {
  return (
    <div>
    {
    DATA.customers.map((customer, index) =>
      (<div key={index}>
        <h1> { customer.name } </h1>
        <h3>  { customer.email }</h3>
        <img className="acme-img"src={ customer.img } />
      </div>)
    )
    }
    </div>
  )
}

const AcmeApp = (props) => {

  return (
    <div>
      <div>
        <AcmeInfo title={DATA.title} street={DATA.street}
                  city={DATA.city} state={DATA.state} zip={DATA.zip} phoneNumber={DATA.phoneNumber}/>

      </div>
      <div>
        <AcmeItems/>
      </div>
    </div>
  )
}


export default AcmeApp;
