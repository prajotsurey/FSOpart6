import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const addBlog = (event) => {
    event.preventDefault()
    dispatch(createAnecdote(event.target.anecdote.value))
    event.target.anecdote.value = ''
  }  
  return(
    <div>
      <h2>Create New</h2>
        <form onSubmit={ addBlog }>
          <input name = 'anecdote' >
          </input>
          <button type="submit">add</button>
        </form>
    </div>
  )
}

export default AnecdoteForm