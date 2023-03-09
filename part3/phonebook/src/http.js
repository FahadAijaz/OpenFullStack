import axios from "axios"
const baseUrl = 'http://localhost:3001/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}
const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}
const deletePerson = personId => {
    console.log(personId)
    const request = axios.delete(baseUrl + "/" + personId)
    return request.then(response => response.data)
}

const httpMethods = { create, getAll, deletePerson }
export default httpMethods