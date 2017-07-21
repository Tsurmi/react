  import React from 'react';
  import NavBar from './NavBar'
  import Jumbtron from './Jumbtron'
  import Section from './Section'

  const App = () => {
    return (
      <div className='app-container'>
        <NavBar navLinks={["Home", "About", "Photos", "Blog"]} />
        <Jumbtron
          header={"Amaro"}
          callToAction={"The Spirited World of"}
          information={"BITTERSWEET and HERBAL LIQUEURS"}
        />
        <Section sectionHeader={"History"} />
      </div>
    )
  }

  export default App;
