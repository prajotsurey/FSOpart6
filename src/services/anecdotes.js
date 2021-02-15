import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'
const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (content) => {
  const anecdote = {content, votes:0}
  const response = await axios.post(baseUrl, anecdote)
  return response.data
}

const update = async ({ content, id, votes }) => {
  const newAnecdote = {
    content,
    id,
    votes : votes+1
  }
  const response = await axios.put(`${baseUrl}/${id}`,newAnecdote)
  return response.data
}
export default {
  getAll,
  create,
  update
}