import React, { Component } from 'react'

export default class Uncontrolled extends Component {
  rcref = React.createRef()
  render () {
    return (
      <div>
        <input ref={this.rcref} type="text" defaultValue='james' />
        <button onClick={() => console.log(this.rcref.current.value)}
        >login</button>
        <button onClick={() => this.rcref.current.value = ''}>Clear</button>
      </div>
    )
  }
}
//  setState()后, render()执行