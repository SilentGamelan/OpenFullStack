import React, { useState } from 'react'

const Entry = ({name}) => {
  return (
    <div>{name}</div>
  )
};

const Entries = ({persons}) => {

  return (
    persons.map(person => 
      <Entry key={person.name} name={person.name} />
  )
)};


const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')


  const handleFormChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  }

  const addPerson = (event => {
    event.preventDefault();

    const sanitisedNewName = newName.toLocaleLowerCase().trim();
    const isDuplicate = persons.some(person => person.name.includes(sanitisedNewName));

    if(isDuplicate) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const newPerson = {
        name: newName,
      };

      setPersons(persons.concat(newPerson));
    }

    setNewName('');
  })


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleFormChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Entries persons={persons} />
    </div>
  )
}

export default App