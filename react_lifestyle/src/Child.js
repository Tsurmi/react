import React from 'react';

class Child extends React.Component {
  constructor () {
    super()
    console.log("constructor()")
  }

  componentDidMount() {
    console.log('Component did mount()')
  }

  componentWillMount() {
    console.log('Component will mount()')
  }

  render () {
    console.log('render()');
    return (
      <h1>Hello World</h1>
    )
  }
}

export default Child;
