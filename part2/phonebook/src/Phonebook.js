const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className='error'>
        {message}
      </div>
    )
  }
const Phonebook = (props) => {
    const { newName, newNumber, addPerson, handleNameChange, handleNumberChange, errorMessage} = props
    return (<form onSubmit={addPerson}>
        <Notification className='error' message={errorMessage}/>
        <div>
            name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
            number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>)
}

export default Phonebook