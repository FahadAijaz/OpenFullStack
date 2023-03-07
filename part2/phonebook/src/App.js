


import { useState } from 'react'
import Numbers from './Numbers'
import Phonebook from './Phonebook'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personExists = persons.some(p => p.name === newName)
    if (personExists) {
      alert(`${newName} is already added to the phonebook`)
      return
    }
    setPersons(persons.concat({ name: newName, number: newNumber }))
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Phonebook newName={newName} newNumber={newNumber} addPerson={addPerson} handleNameChange={handleNameChange} handleNumberChange ={handleNumberChange}/>
      <h2>Numbers</h2>
      <Numbers persons={persons}/>
    </div>
  )
}


export default App;
