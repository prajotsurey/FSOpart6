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
    <form onSubmit={ addBlog }>
      <input name = 'anecdote' >
      </input>
      <button type="submit">add</button>
    </form>
  )
}

export default AnecdoteForm