import React, { Component } from 'react'
class Field extends Component {
  state = { value: '' }
  clear () {
    this.setState({ value: '' })
  }
  setValue (val) {
    this.setState({ value: val })
  }
  render () {
    return (
      <div>
        <label>{this.props.label}</label>
        <input value={this.state.value} type={this.props.type} onChange={(evt) => {
          //this.setState({ value: evt.target.value })
          this.setValue(evt.target.value)
        }} />
      </div>
    )
  }
}
//localStorage.setItem('username', 'Jimmy')
export default class ChildParentFiled extends Component {
  //state = { username: localStorage.getItem('username'), password: '123' }
  username = React.createRef()
  password = React.createRef()
  render () {
    return (
      <div>
        <Field type='text' label='username:' ref={this.username}
        ></Field>
        <Field type='password' label='password:' ref={this.password}
        ></Field>
        <button onClick={() => {
          console.log(this.password)
          console.log(this.username.current)
          console.log(this.username.current.state)
          console.log(this.username.current.state.value, this.password.current.state.value)
        }}
        >Login </button>
        <button onClick={() => {
          this.password.current.clear()
          this.username.current.clear()
        }}
        >Clear</button>
      </div >
    )
  }
}
