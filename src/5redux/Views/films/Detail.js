import React, { useEffect } from 'react'
import store from '../../Redux/Store'
import { hide, show } from '../../Redux/actionCreator/TabbarActionCreator'
export default function Detail (props) {
  //console.log('props in Detail', props)
  useEffect(() => {
    console.log('create')
    store.dispatch(hide())
    return () => {
      console.log('destroy')
      store.dispatch(show())
    }
  }, [])

  return (
    <div>Detail ID: {props.match.params.myid}</div>
  )
}
