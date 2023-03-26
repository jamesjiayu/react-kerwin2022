import React, { Component } from 'react'
import MRouter from './router/indexRouter'
import Tabbar from './components/Tabbar'
import store from './Redux/Store'
export default class App extends Component {
  state = { isShow: store.getState().tabbarReducer.show }
  componentDidMount () {
    store.subscribe(() => {
      this.setState({ isShow: store.getState().tabbarReducer.show })
    })
  }
  render () {
    return (<>
      <MRouter>
        {this.state.isShow && <Tabbar></Tabbar>}
      </MRouter>

    </>
    )
  }
}
