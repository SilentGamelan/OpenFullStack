import React from 'react'
import Entries from './Entries'

const DisplayPhoneBook = ({persons}) => {
    if(persons.length === 0) {
      return <div>No persons matching this name found</div>
    } else {
      return <Entries persons={persons} />
    }
    
  }

  export default DisplayPhoneBook