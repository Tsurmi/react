  import React from 'react';

  const NavBar = (props) => {
    return (
      <nav className='nav'>
        <ul className='nav-bar'>
          {
            props.navLinks.map(function(item){
              return <li>{item}</li>
            })
          }
        </ul>
      </nav>
    )
  }

  export default NavBar;
