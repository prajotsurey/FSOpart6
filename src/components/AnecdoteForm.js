import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {
  const addBlog = async (event) => {
    event.preventDefault()
    props.createAnecdote(event.target.anecdote.value)
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

const mapDispatchToProps = {
  createAnecdote,
}

export default connect(
null,
mapDispatchToProps
)(AnecdoteForm)