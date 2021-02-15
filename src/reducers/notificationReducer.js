var counter = 0

export const setNotification = (content,time) => {
  return async dispatch => {
    const id = counter++
    dispatch({
      type:'SET_NOTIFICATION',
      data: {  
        content : content,
        counter : id,
      } 
    })
    setTimeout(() => {
      dispatch({
        type:'CLEAR_NOTIFICATION',
        data: {
          counter : id,
        } 
      })
    },time*1000)
  }
}

const notificationReducer = (state = '', action) => {
  switch(action.type){
    case 'SET_NOTIFICATION':
      return action.data 
    case 'CLEAR_NOTIFICATION':
      if(action.data.counter === state.counter)
      {
        return ''
      }
      return state
    default:
      return state
  }
}

export default notificationReducer