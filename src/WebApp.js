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

const Jumbtron = (props) => {
  return (
    <div className='jumbotron'>
      <h3> {props.header} </h3>
        <p>  {props.callToAction} </p>
      <h4> {props.information} </h4>
    </div>
  )
}

const Section = (props) => {
  return (
    <div>
      <h5>{props.sectionHeader}</h5>
      <p> {props.info} </p>
      // <img className="img" src={props.img} />
    </div>
  )
}

const WebApp = () => {
  return (
    <div className='app-container'>
      <NavBar navLinks={["Home", "About", "Contact", "Blog"]} />
      <Jumbtron
        header={"Super Duper Web App"}
        callToAction={"I built this with React"}
        information={"This website is about React"}
      />
      <Section sectionHeader={"About"} />
      <Section sectionHeader={"Info"} />
    </div>
  )
}

export default WebApp;
