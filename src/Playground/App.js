import React from 'react';
import faker from 'faker';
import Counter from './Counter';
import UserList from './UserList';

//SMART / Container / has state
//DUMB / Presentational / return HTML


//state and props are from REACT Library
class App extends React.Component {

  state = {
    name:"Travis",
    firstName: null,
    lastName: null,
    image: null,
    counter: 0,
    users: null,
    showCounter: true
  }

  increaseCounter = this.increaseCounter.bind(this);

  componentDidMount() {
    this.fetchUsersFromServer();
  }

  fetchUsersFromServer = () => {
    //temporary array to hold people
    //for loop to create person and push into temp array
    //set state of users to temp array
    const temporaryArray = [];
    for(var i=0; i<20; i+=1){
      temporaryArray.push({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        img: faker.random.image()
      });
    }
    this.setState({users: temporaryArray})
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

updatefirstName= (event) => this.setState({firstName: event.target.value});
updateLastName= (event) => this.setState({lastName: event.target.value});
updateImg= (event) => this.setState({image: event.target.value});

handleFormSubmit = (event) => {
  event.preventDefault()
  const person = {
    firstName: this.state.firstName,
    lastName: this.state.lastName,
    img: this.state.image
  }
  console.log(person)
  let users = this.state.users
  users.push(person)
  console.log("users",users)
  this.setState({users})
}


  render() {
    return (
      <div>
      <form onSubmit={this.handleFormSubmit}>
        <input
          onChange={this.updatefirstName}
        />
        <input
          onChange={this.updateLastName}
        />
        <input
          onChange={this.updateImg}
        />
          <button type="submit">Submit</button>
      </form>

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
          ? <UserList usersData={this.state.users} />
          : <h1> Users Being Loaded </h1>
        }
      </div>
    )
  }
}

export default App;
