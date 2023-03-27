import React, { Component } from 'react'
import MRouter from './router/indexRouter'
import Tabbar from './components/Tabbar'
//import store from './Redux/Store'
import { connect } from 'react-redux'
class App extends Component {
  // state = { isShow: true }//store.getState().tabbarReducer.show }
  componentDidMount () {
    console.log('in App, connect pass to child App: ', this.props)
    // store.subscribe(() => {
    //   this.setState({ isShow: store.getState().tabbarReducer.show })
    // })
  }
  render () {
    return (<>
      <MRouter>
        {this.props.isShow && <Tabbar></Tabbar>}
      </MRouter>

    </>
    )
  }
}
const mapStateToProps = (state) => {
  // console.log('in App, connectCallBack state', state)
  return {
    a: 1,
    b: 2,
    isShow: state.tabbarReducer.show
  }
}
export default connect((state) => {
  // console.log('in App, connectCallBack state', state)
  return {
    a: 1,
    b: 2,
    isShow: state.tabbarReducer.show
  }
})(App)