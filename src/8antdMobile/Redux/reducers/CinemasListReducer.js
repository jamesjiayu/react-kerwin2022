export const CinemasListReducer = (prevState = { list: [] }, action) => {
  // console.log('action: ', action)
  let newState = { ...prevState }
  switch (action.type) {
    case 'changeCinemas':
      newState.list = action.payload
      return newState
    default:
      return prevState
  }
}