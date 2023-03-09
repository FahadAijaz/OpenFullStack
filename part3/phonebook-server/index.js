require('dotenv').config()
const express = require('express')
const app = express()
const cors = require("cors")
const Person = require("./mongo");
let persons =
    [
        {
            "id": 1,
            "name": "Arto Hellas",
            "number": "040-123456"
        },
        {
            "id": 2,
            "name": "Ada Lovelace Petr",
            "number": "39-44-5323523"
        },
        {
            "id": 3,
            "name": "Dan Abramov",
            "number": "12-43-234345"
        },
        {
            "id": 4,
            "name": "Mary Poppendieck",
            "number": "39-23-6423122"
        }
    ]

const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
}
app.use(requestLogger)

app.use(cors())
app.use(express.json())


app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
    Person.find({}).then(r => response.json(r))
})
app.get('/info', (request, response) => {
    const info = `Phonebook has info for ${persons.length} people \n
    ${new Date()}`
    response.send(info)
})

app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const person = persons.find(p => p.id == id)
    if (person) {
        response.json(person)
    } else {
        response.sendStatus(404)
    }
})

app.delete('/api/persons/:id', (req, res) => {
    const id = req.params.id
    const oldLen = persons.length
    persons = persons.filter(p => p.id != id)
    const newLen = persons.length
    if (oldLen != newLen) {
        res.sendStatus(200)
    } else {
        res.sendStatus(404)
    }
})

app.post('/api/persons/', (req, res) => {
    const newId = Math.floor(Math.random() * 1000)
    const name = req.body.name
    const number = req.body.number
    if (!name || !number) {
        res.status(400).send({error: 'name must be unique'})
        return
    } else {
        const personExists = persons.find(p => p.name == name)
        if (personExists) {
            res.status(400).send({error: 'name must be unique'})
            return
        }
        const newPerson = {name: name, number: number, id: newId}
        persons.push(newPerson)
        res.json(newPerson)
    }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
