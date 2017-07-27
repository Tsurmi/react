  import React,{Component} from 'react';
  import NavBar from './WebApp/NavBar'


  class App extends Component{
    render(){
      return (
        <div className='app-container'>
        <NavBar navLinks={["Home", "About", "Photos", "Blog"]} />
        {this.props.children}
        </div>
      )
    }
  }

  export default App;

//Think of a container as a state manager
//render is a function
//Class is a javascript key word ( Class is a blueprint )
//this.props.children -
