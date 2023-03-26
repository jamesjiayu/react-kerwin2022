import React, { useEffect, useState } from 'react'
import store from '../Redux/Store'
import { CinemasListReducer } from '../Redux/reducers/CinemasListReducer'
import { getCinemasListAction } from '../Redux/actionCreator/getCinemasListAction'
export default function Search () {
  const [cinemaList, setCinemaList] = useState(store.getState().CinemasListReducer.list)
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

  return (
    <> <h2>Search: </h2><input type='search' />
      {cinemaList.map(cinema => <li key={cinema.id}>{cinema.content}</li>)}
    </>
  )
}
