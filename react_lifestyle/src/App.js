import React from 'react';
import Child from './Child';
//when importing dot means my current folder

class App extends React.Component {
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
      <Child />
    )
  }
}

export default App;
