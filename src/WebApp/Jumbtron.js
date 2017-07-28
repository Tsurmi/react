  import React from 'react';

  const Jumbtron = (props) => {
    return (
      <div className='jumbotron-react'>
        <h3> {props.header} </h3>
          <p> {props.callToAction} </p>
        <h4> {props.information} </h4>
      </div>
    )
  }

  export default Jumbtron;
