import React from 'react';
import faker from 'faker';


//SMART / Container / has state
//DUMB / Presentational / return HTML

const UsersList = (props) => {
  return (
    <div>
      <h1> Found Users List</h1>
      <ul>
        {
        props.usersData.map((user, index) => {
            return <li key={index}> {user.name} </li>
          })
        }
      </ul>
    </div>
  )
}
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
//state and props are from REACT Library
class App extends React.Component {

  state = {
    name:"Travis",
    counter: 0,
    users: null,
    showCounter: true
  }

  increaseCounter = this.increaseCounter.bind(this);

  componentDidMount() {
    this.fetchUsersFromServer()
    const randomName = faker.name.firstName();
    alert(randomName);
  }

  fetchUsersFromServer() {
   // pretend it's an AJAX function
   const users = [
     { name: "Doug", id: 1, },
     { name: "Hannah", id: 2, },
     { name: "Jette", id: 3, },
     { name: "Joseph", id: 4, },
   ]
   setTimeout(() => {
     this.setState({ users: users })
   }, 3000);
 }
  increaseCounter(){
    this.setState({ counter: this.state.counter += 1})
  }
  decreaseCount= () => {
    this.setState({ counter: this.state.counter -= 1})
  }

  toggleCounter() {
    this.setState({ showCounter: !this.state.showCounter })
  }

  render() {
    return (
      <div>
      <button
      className={this.state.showCounter ? "open-btn" :"close-btn"}
      onClick= {() => this.toggleCounter()}>

      { this.state.showCounter ? "show" : "hide"}
      </button>
      {
        this.state.showCounter
        ? <Counter
            counter={this.state.counter}
            increaseCounter={this.increaseCounter}
            decreaseCount={this.decreaseCount}
        /> : null
        }
        {
          this.state.users
          ? <UsersList usersData={this.state.users} />
          : <h1> Users Being Loaded </h1>
        }
      </div>
    )
  }
}

export default App;