export const tabbarReducer = (prevState = { show: true, }, action) => {
  // console.log('action: ', action)
  let newState = { ...prevState }
  switch (action.type) {
    case 'hideTabbar_inDetail':
      newState.show = false
      return newState// break
    case 'showTabbar_inDetail':
      newState.show = true
      return newState
    default:
      return prevState
  }
}