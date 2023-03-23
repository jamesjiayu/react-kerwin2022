import React, { Component } from 'react'

export default class Getderivedstatefromprops extends Component {
  state = {
    username: 'jim',
    age: 18
  }
  static getDerivedStateFromProps (nextProps, nextState) {
    return { username: nextState.username }//
  }
  componentDidMount () {//work together with DidMount

  }
  render () {
    return (<React.Fragment>
      <div>{this.state.username}</div>
      <button onClick={() => this.setState({ username: 'sth' })}>click</button>
    </React.Fragment>)
  }
}
