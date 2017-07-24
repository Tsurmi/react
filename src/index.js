import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,
        Route, Link } from 'react-router-dom'
import './styles.css';

import NavigationBar from './components/NavigationBar';
import App from './WebApp/App';
import ChatApp from './Chatter/ChatApp';
import AcmeApp from './Acme/AcmeApp';
import DATA from './Acme/ACMEDATA';



const Home = () => {
  return (
    <div>
      <h3> Hello from Home </h3>
    </div>
    )
}

ReactDOM.render(
  <AcmeApp />,
    document.getElementById('root'));
  <Router>
    <div>
      <NavigationBar />

      <Route exact path="/" component={Home} />
      <Route path="/web-app" component={App} />
      <Route path="/fake-chat" component={ChatApp} />
      <Route path="acme-app" component={AcmeApp} />

    </div>
  </Router>
