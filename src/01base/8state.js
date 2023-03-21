import React, { Component } from 'react'

export default class StateApp extends Component {
  constructor() {
    super()
    this.state = {
      text: 'bookmark',
      myshow: true
    }
  }
  // state = {
  //   text: 'bookmark',
  //   myshow: true
  // }
  render () {
    return (
      <div>
        <h1>Wellcome</h1>
        <button onClick={() =>
          this.setState({ myshow: !this.state.myshow })}>
          {this.state.myshow ? 'bookmark' : 'cancel bookmark'}
        </button>
      </div>
    )
  }
}
