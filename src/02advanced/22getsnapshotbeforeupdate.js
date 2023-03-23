import React, { Component } from 'react'

export default class Getsnapshotbeforeupdate extends Component {
  state = { mytext: 'jjj' }
  render () {
    return (
      <div>{this.state.mytext}
        <button onClick={() => this.setState({ mytext: 'K' })}
        >click</button>
      </div>
    )
  }
  getSnapshotBeforeUpdate () {
    console.log('getsnapshotbeforeupdate')
    return 111
  }
  componentDidUpdate (prevProps, prevState, value) { //value from getSnapshotBeforeUpdate
    console.log('componentDidUpdate', value)
  }
}
