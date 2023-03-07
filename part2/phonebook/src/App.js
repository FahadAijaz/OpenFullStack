import { useState, useEffect } from 'react'
import Numbers from './Numbers'
import Phonebook from './Phonebook'
import httpMethods  from './http'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  useEffect(() => {
    console.log('effect')
    httpMethods.getAll().then(r => setPersons(r))
  }, [])
  
  const addPerson = (event) => {
    event.preventDefault()
    const personExists = persons.some(p => p.name === newName)
    if (personExists) {
      alert(`${newName} is already added to the phonebook`)
      return
    }
    const person = { name: newName, number: newNumber }
    httpMethods.create(person)
    setPersons(persons.concat(person))
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
      <Numbers persons={persons} setPersons={setPersons}/>
    </div>
  )
}


export default App;
