import React from 'react';

const Section = (props) => {
  return (
    <div className='section'>
      <h5>{props.sectionHeader}</h5>
      <p>While the drink's origins are unknown, the most widely reported account is that it was first mixed in Florence, Italy, in 1919, at Caffè Casoni (formerly Caffè Giacosa), located on Via de' Tornabuoni and now called Caffè Roberto Cavalli. Count Camillo Negroni concocted it by asking the bartender, Fosco Scarselli, to strengthen his favorite cocktail, the Americano, by adding gin rather than the normal soda water. The bartender also added an orange garnish rather than the typical lemon garnish of the Americano to signify that it was a different drinkAfter the success of the cocktail, the Negroni Family founded Negroni Distillerie in Treviso,
      Italy, and produced a ready-made version of the drink, sold as Antico Negroni 1919.
      One of the earliest reports of the drink came from Orson Welles in correspondence with the Coshocton
      Tribune while working in Rome on Cagliostro in 1947, where he described a new drink called the Negroni,
      "The bitters are excellent for your liver, the gin is bad for you. They balance each other."Cocktail historian
      David Wondrich has researched Camillo Negroni, who was born on 25 May 1868 to Enrico Negroni and Ada Savage Landor,
      and died in Florence on 25 September 1934. While his status as a count is questionable, his grandfather, Luigi Negroni,
      was indeed a count. Descendants of General Pascal Olivier de Negroni, Count de Negroni claim that he was the Count
      Negroni who invented the drink in 1857 in Senegal. "A Corse Matin" Sunday Edition article dated 2 February 1980 is
      translated on a descendant's blog: this claims he invented the drink around 1914.[9] An article in the
      New Hampshire Union Leader reported on the controversy.'</p>
      <img className="img" src={props.img}/>
    </div>

  )
}



export default Section;
