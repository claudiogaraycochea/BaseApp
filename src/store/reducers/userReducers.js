export default (state = '2222222', action) => {
  switch(action.type) {
    case 'SET_REDUX_VARIABLE':
      return action.payload
    default:
      return state
  }
}