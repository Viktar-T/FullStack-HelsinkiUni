import axios from 'axios'

const baseUrl = "http://localhost:3001/persons"

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = (person) => {
  const request =  axios.post(baseUrl, person)
  return request.then(response => response.data)
}

const update = (id, obj) => {
  const request = axios.put(`${baseUrl}/${id}`, obj)
  return request.then(resp => resp.data)
}

const del = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}


export default {getAll, create, update, del}