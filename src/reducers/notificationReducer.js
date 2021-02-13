
export const voteNotify = (content) => {
  return {
    type: 'VOTE_NOTIFICATION',
    data: {
      content 
    }
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR_NOTIFICATION'
  }
}

const notificationReducer = (state = '', action) => {
  switch(action.type){
    case 'VOTE_NOTIFICATION':
      return `You voted '${action.data.content}'`
    case 'CLEAR_NOTIFICATION':
      return null
    default:
      return state
  }
}

export default notificationReducer