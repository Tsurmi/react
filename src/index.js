import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,
        Route, Link } from 'react-router-dom'
import './styles.css';

import NavigationBar from './components/NavigationBar';
import App from './App';
import WebApp from './WebApp/WebApp';
import ChatApp from './Chatter/ChatApp';
import AcmeApp from './Acme/AcmeApp';
import Playground from './Playground/App';


const Home = () => {
  return (
    <div>
      <h3>Hello from Home</h3>
    </div>
  )
}

ReactDOM.render(
  <Router>
    <div>
      <NavigationBar />
      <Route exact path="/" component={Home} />
      <Route path="/web-app" component={WebApp} />
      <Route path="/fake-chat" component={ChatApp} />
      <Route path="/acme-app" component={AcmeApp} />
      <Route path="/playground" component={Playground} />

    </div>
  </Router>,
    document.getElementById('root'));
