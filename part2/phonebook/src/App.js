import React, { useState } from 'react'
import Filter from './components/Filter'
import DisplayPhoneBook from './components/DisplayPhoneBook'
import PersonForm from './components/PersonForm';





const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);

  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber] = useState('');
  const [ newFilter, setNewFilter] = useState('');

  // If no filter string, show all entries
  const filteredEntries = newFilter === "" 
    ? persons
    : persons.filter(person => person.name.toLocaleLowerCase().includes(newFilter));

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const handleNameFilter = (event) => {
    setNewFilter(event.target.value);
  }

  const addPerson = (event => {
    event.preventDefault();

    // Remove extraneous whitespace
    const sanitisedNewName = newName.trim();
    const sanitisedNewNumber = newNumber.trim();

    // Make duplicate check case-insensitive
    const isDuplicate = persons.some(person => person.name.toLocaleLowerCase() === sanitisedNewName.toLocaleLowerCase());

    if(isDuplicate) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const newPerson = {
        name: sanitisedNewName,
        number: sanitisedNewNumber
      };

      setPersons(persons.concat(newPerson));
    }

    setNewName('');
    setNewNumber('');
    setNewFilter('');
  });


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} filterHandler={handleNameFilter} />
      <h3>Add a new </h3>
      <PersonForm submitHandler={addPerson} newName={newName} nameChangeHandler={handleNameChange} newNumber={newNumber} numberChangeHandler={handleNumberChange} />
      <h2>Numbers</h2>
      <DisplayPhoneBook persons={filteredEntries} />
      
    </div>
  )
}

export default App