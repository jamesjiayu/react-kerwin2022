import React, { useReducer } from 'react'
const reducer = (prevState, action) => {
  console.log(prevState, '||||', action)
  let state = { ...prevState }
  switch (action.type) {
    case 'add':
      state.count++
      return state
    //  break
    case 'minus':
      state.count--
      return state
    // break
    default: return prevState
  }
}
const initState = { count: 0, list: [] }
export default function UseReducerApp () {
  const [state, dispatch] = useReducer(reducer, initState)
  return (
    <>
      <button onClick={() => { dispatch({ type: 'add' }) }}>++++</button>
      {state.count}
      <button onClick={() => dispatch({ type: "minus" })} >----</button>
    </>
  )
}
