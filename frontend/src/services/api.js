import axios from 'axios'

const API = "http://localhost:8080/api/tasks"

export const getTasks = () => axios.get(API)
export const getTask = (id) => axios.get(`${API}/${id}`)
export const addTask = (task) => axios.post(API, task)
export const updateTask = (id, task) => axios.put(`${API}/${id}`, task)
export const deleteTask = (id) => axios.delete(`${API}/${id}`)
