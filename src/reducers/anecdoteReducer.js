import anecdoteService from '../services/anecdotes'

export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    const updatedObject = await anecdoteService.update(anecdote)
    dispatch({ type: 'VOTE', data: updatedObject })
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const returnedObject = await anecdoteService.create(content)
    dispatch({ type: 'NEW', data: returnedObject })
  }
}

export const initAnecdotes = (anecdotes) => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({ type: 'INIT', data: anecdotes })
  }
}

const anecdoteReducer = (state = [], action) => {
  switch(action.type) {
    case 'VOTE' : {
      const changedAnecdote = action.data
      return state.map( anecdote => 
        anecdote.id === changedAnecdote.id ? changedAnecdote : anecdote 
      )
    }
    case 'NEW' : {
      return [...state, action.data]
    }
    case 'INIT' : {
      return action.data
    }
    default :
      return state
  }
}

export default anecdoteReducer