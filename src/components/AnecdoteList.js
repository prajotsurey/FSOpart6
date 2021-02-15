import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleClick }) => {
  return(
    <div>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes} votes
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  )
}
const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes.sort((a,b)=> b.votes -a.votes ))
  const filter = useSelector(state => state.filter)
  const anecdotesToShow = anecdotes.filter( (anecdote) => anecdote.content.indexOf(filter) !== -1 )
  const voter = (anecdote) => {
    dispatch(voteAnecdote(anecdote))
    dispatch(setNotification(`you voted '${anecdote.content}'`, 3))
  }
  return (
    <div>
      {anecdotesToShow.map(anecdote =>
        <Anecdote 
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() =>{ voter(anecdote) } 
          }
        />
      )}
    </div>
  )
}

export default AnecdoteList