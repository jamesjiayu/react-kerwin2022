import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
//import store from '../Redux/Store'
import { getCinemasListAction } from '../Redux/actionCreator/getCinemasListAction'
import { CinemasListReducer } from "../Redux/reducers/CinemasListReducer"
function Cinemas (props) {
  // const [city] = useState(store.getState().cityReducer.city)
  // const [cinemaList, setCinemaList] = useState(store.getState().CinemasListReducer.list)
  // console.log('props cinemas:', props)
  useEffect(() => {
    if (props.list.length === 0) {
      props.getCinemasListAction()
    } else {
      console.log('get from cache? ')
    }
    // if (store.getState().CinemasListReducer.list.length === 0) {
    //   store.dispatch(getCinemasListAction())
    // }
    // let unsubcribe = store.subscribe(() => {
    //   console.log('cinema Subscribe, store.getState():', store.getState())
    //   setCinemaList(store.getState().CinemasListReducer.list)
    // })
    // return () => {
    //   unsubcribe()
    // }
  }, [props.list, props.getCinemasListAction])

  return (<>
    <div style={{ overflow: 'hidden' }} >
      <div style={{ float: 'left' }} onClick={() => props.history.push('/city')}>{props.city}</div>
      <div style={{ float: 'right' }} onClick={() => props.history.push('/cinemas/search')}> Search</div>
    </div>
    <h2>Cinemas</h2><ul>
      {props.list.map(cinema => <li key={cinema.id}>{cinema.content}</li>)}
    </ul>
  </>)
}
const mapStateToProps = (state) => {
  return {
    list: state.CinemasListReducer.list,
    city: state.cityReducer.city
  }
}
const mapDispatchToProps = { getCinemasListAction }
export default connect(mapStateToProps, mapDispatchToProps)(Cinemas)