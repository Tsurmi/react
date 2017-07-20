  import React from 'react';

  const NamesList = (props) => {
    const nameItems = props.names.filter(function(name){
      return name.length === 4
    })
      .map(function(name){
      return <li> {name} </li>
    });

    return (
      <div>
        <h3>Names</h3>
        <ul>
          { nameItems }
        </ul>
      </div>
    )
  }

  const NumbersOver30Under70= (props) => {
    const numItems = props.numbers
    .filter(function(num) {
      return num<70 && num >30;
    })
    .map(function(num, index){
      return <li> key={index} > {num}</li>
    })
    return (
      <div>
      <ul>
        {numItems}
      </ul>
      </div>
    )
  }

  const Books = (props) => {
    const book = props.books.map(function(book, index){
      return (
        <div>
          <h1>{book.title}</h1>
          <h3>{book.author}</h3>
        </div>
      )
    })

    return (
        <div>
          {book}
        </div>
    )
  }

  const MappingAndFiltering = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        <NamesList names={props.allTheData.names}/>
        <NumbersOver30Under70 numbers={props.allTheData.numbers}/>
        <Books books={props.allTheData.books}/>
      </div>
    )
  }



  export default MappingAndFiltering;
