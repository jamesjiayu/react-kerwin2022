import React, { useContext, useReducer } from 'react'
const reducer = (prevState, action) => {
  let state = { ...prevState }
  switch (action.type) {
    case 'child1a': state.a = action.value
      return state
    case 'child2b': state.b = action.value
      return state
    default: return prevState
  }
}
const initState = { a: 'aaa', b: 'bbb' }
const gContext = React.createContext()
export default function ReducerContext () {
  const [state, dispatch] = useReducer(reducer, initState)
  return (
    <gContext.Provider value={{ state, dispatch }}>
      <><Child1></Child1>
        <Child2></Child2>
        <Child3></Child3>
      </></gContext.Provider>

  )
}
function Child1 () {
  const { dispatch } = useContext(gContext)
  return (
    <> <button onClick={() => dispatch({
      type: 'child1a', value: 'AA'
    })}>change A Child2</button>
      <button onClick={() => dispatch({ type: 'child2b', value: 'BB' })}>change B Child3</button>
    </>
  )
}
function Child2 () {
  const { state } = useContext(gContext)
  return (
    <div>{state.a}</div>
  )
}
function Child3 () {
  const { state } = useContext(gContext)
  return (
    <div>{state.b}</div>
  )
}