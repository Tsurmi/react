import React from 'react';
import Jumbtron from './Jumbtron'
import Section from './Section'

const WebApp = (props) => {
  return (
    <div>
      <Jumbtron
        header={"Amaro"}
        callToAction={"The Spirited World of"}
        information={"BITTERSWEET and HERBAL LIQUEURS"}
      />
      <Section sectionHeader={"History"} />
    </div>
  )
}

export default WebApp;
