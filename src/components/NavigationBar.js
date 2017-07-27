  import React from 'react';
  import {Link} from 'react-router-dom';

  const NavigationBar = () => {
    return (
      <div>
        <ul className="navigation">
          <li> <Link to="/"> Home </Link> </li>
          <li> <Link to="/web-app"> Web App </Link> </li>
          <li> <Link to="/fake-chat"> Chat App </Link> </li>
          <li> <Link to="/acme-app"> Acme App </Link> </li>
          <li> <Link to="/Playground"> Playground </Link> </li>
        </ul>
      </div>
    )
  }

  export default NavigationBar;
