import React, { useEffect } from 'react'
import { connect } from 'react-redux'
//import store from '../../Redux/Store'
import { hide, show } from '../../Redux/actionCreator/TabbarActionCreator'
function Detail (props) {
  console.log('props in Detail', props)
  useEffect(() => {
    console.log('create')
    // store.dispatch(hide())
    props.hide()
    return () => {
      console.log('destroy')
      // store.dispatch(show())
      props.show()
    }
  }, [props.hide, props.show])

  return (
    <div>Detail ID: {props.match.params.myid}</div>
  )
}
//connect(param1, param2). param1 给孩子的属性,见App.js。
//param2 给孩子的 回调函数 callbacks
const mapDispatchToProps = { show, hide }
export default connect(null, { show, hide })(Detail)
