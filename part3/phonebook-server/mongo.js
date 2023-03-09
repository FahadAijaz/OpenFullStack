const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url)
    .then(result => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Person = mongoose.model('Person', personSchema)
const  findAllPersons = async () => {
    return Person.find({})
};
const createPerson = async ({name, number}) => {
    const newPerson = new Person({name, number})
    await newPerson.save()
}
const deletePerson = async (id) => {
    return Person.deleteOne({id: id})
}
module.exports = {Person, findAllPersons, createPerson, deletePerson}
