import React, { useState, useEffect } from 'react'
import store from '../Redux/Store'
import { getCinemasListAction } from '../Redux/actionCreator/getCinemasListAction'
import { CinemasListReducer } from "../Redux/reducers/CinemasListReducer"
export default function Cinemas (props) {
  const [city] = useState(store.getState().cityReducer.city)
  const [cinemaList, setCinemaList] = useState(store.getState().CinemasListReducer.list)
  // console.log('props cinemas:', props)
  useEffect(() => {
    if (store.getState().CinemasListReducer.list.length === 0) {
      store.dispatch(getCinemasListAction())
    } else {
      console.log('get from cache? ')
    }
    let unsubcribe = store.subscribe(() => {
      console.log('cinema Subscribe, store.getState():', store.getState())
      setCinemaList(store.getState().CinemasListReducer.list)
    })
    return () => {
      unsubcribe()
    }
  }, [])

  return (<>
    <div style={{ overflow: 'hidden' }} >
      <div style={{ float: 'left' }} onClick={() => props.history.push('/city')}>{city}</div>
      <div style={{ float: 'right' }} onClick={() => props.history.push('/cinemas/search')}> Search</div>
    </div>
    <h2>Cinemas</h2><ul>
      {cinemaList.map(cinema => <li key={cinema.id}>{cinema.content}</li>)}
    </ul>
  </>)
}
