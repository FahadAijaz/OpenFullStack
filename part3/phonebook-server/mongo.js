const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}
const password = process.argv[2]

const name = process.argv[3]
const number = process.argv[4]


const url =
    `mongodb://localhost:27017/OpenFullStack`

mongoose.set('strictQuery', false)
mongoose.connect(url)
mongoose.connection.once('open', () => {
    console.log('Mongoose default connection connected')
})
mongoose.connection.on('error', function (err) {
    console.log(err)
});

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
    name: name,
    number: number
})

if (!name || !number) {
    Person.find({})
        .then(p => {
            console.log(p)
            mongoose.connection.close()
        })

} else {
    person.save().then(result => {
        console.log('person saved!')
        mongoose.connection.close()
    })

}


