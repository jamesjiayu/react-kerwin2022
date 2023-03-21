import React, { Component } from 'react'
class Field extends Component {
  render () {
    return (
      <div>
        <label>{this.props.label}</label>
        <input value={this.props.val} type={this.props.type} onChange={(evt) => {
          this.props.evtMy(evt.target.value)
        }} />
      </div>
    )
  }
}
localStorage.setItem('username', 'Jimmy')
export default class ChildParentFiled extends Component {

  state = { username: localStorage.getItem('username'), password: '123' }
  render () {
    return (
      <div>
        <Field val={this.state.username} type='text' label='username:'
          evtMy={val => {
            this.setState({ username: val })
          }} ></Field>
        <Field val={this.state.password} type='password' label='password:'
          evtMy={val => {
            this.setState({ password: val })
          }} ></Field>
        <button onClick={() => console.log(this.state.username, this.state.password)}
        >Login </button>
        <button >Clear</button>
      </div >
    )
  }
}
