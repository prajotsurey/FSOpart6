import React from 'react'
import { connect } from 'react-redux'
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
const AnecdoteList = (props) => {
  const voter = (anecdote) => {
    props.voteAnecdote(anecdote)
    props.setNotification(`you voted '${anecdote.content}'`, 3)
  }
  return (
    <div>
      {props.anecdotes.map(anecdote =>
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

const mapStateToProps = (state) => {
  const anecdotes = state.anecdotes.sort((a,b)=> b.votes -a.votes )
  const filter = state.filter
  const anecdotesToShow = anecdotes.filter(
     (anecdote) => anecdote.content.indexOf(filter) !== -1 
  )
  return{
    anecdotes: anecdotesToShow
  }
}

const mapDispatchToProps = {
  voteAnecdote,
  setNotification
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)