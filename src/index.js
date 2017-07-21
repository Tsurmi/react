import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,
        Route, Link } from 'react-router-dom'
import './styles.css';

// Our router should navigate to:
  // - Home
  // - ChatApp
  //
import NavigationBar from './components/NavigationBar';
import App from './WebApp/App';
import ChatApp from './Chatter/ChatApp';


const Home = () => {
  return (
    <div>
      <h3> Hello from Home </h3>
    </div>
    )
}

ReactDOM.render((
  <Router>
    <div>
      <NavigationBar />

      <Route exact path="/" component={Home} />
      <Route path="/web-app" component={App} />
      <Route path="/fake-chat" component={ChatApp} />

    </div>
  </Router>
), document.getElementById('root'));
