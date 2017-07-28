import React from 'react';

const Counter = (props) => {
  return (
    <div>
    <h3> counter:  {props.counter}</h3>
    <button onClick={() => props.increaseCounter() }
      > Increase Counter </button>
    <button onClick={() => props.decreaseCount() }
      > Decrement Counter </button>
    </div>
  )
}

export default Counter;
