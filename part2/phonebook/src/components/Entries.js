import React from 'react'

const Entry = ({person}) => {
    return (
      <div>{person.name} {person.number}</div>
    )
  };
  
  const Entries = ({persons}) => {
  
    return (
      persons.map(person => 
        <Entry key={person.name} person={person} />
    )
  )};

  export default Entries