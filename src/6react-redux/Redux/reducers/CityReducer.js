export const cityReducer = (prevState = { city: "Beijing" }, action) => {
  // console.log('action: ', action)
  let newState = { ...prevState }
  switch (action.type) {
    case 'changeCity':
      newState.city = action.payload
      return newState
    default:
      return prevState
  }
}