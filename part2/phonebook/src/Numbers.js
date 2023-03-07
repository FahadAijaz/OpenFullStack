import httpMethods from "./http"
const deletePerson = (persons, person, setPersons) => {
    alert(`Delete ${person.name}?`)
    httpMethods.deletePerson(person.id)
        .then(r => {
            persons = persons.filter(p => p.id !== person.id)
            setPersons(persons)
        })
}
const Numbers = ({ persons, setPersons }) => {
    return (<div>{persons.map(p => {
        return <p>{p.name} {p.number} <button type="submit" onClick={() => deletePerson(persons, p, setPersons)}>delete</button></p>
    })}</div>)
}

export default Numbers