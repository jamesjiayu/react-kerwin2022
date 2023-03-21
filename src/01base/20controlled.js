import React, { Component } from 'react'

export default class Controlled extends Component {
  state = { username: 'James' } //Component controlled by state,
  render () {
    return (
      <div>
        <input type="text" value={this.state.username}
          onChange={(evt) => {
            console.log(evt.target.value)
            this.setState({ username: evt.target.value })
          }}
        />
        <button onClick={() => console.log(this.state.username)}
        >login</button>
        <button onClick={() => this.setState({ username: '' })}>Clear</button>
        <Child myvalue={this.state.username}></Child>
      </div>
    )
  }
}
//onChange={this.setState({ username: this.state.username })}// my wrong
//React onChange === html oninput !== html onchange
class Child extends Component {
  render () {
    return <div></div>
  }
}