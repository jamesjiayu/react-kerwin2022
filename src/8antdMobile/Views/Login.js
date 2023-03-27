import React, { Component } from 'react'

export default class Login extends Component {
  render () {
    return (<>
      <div>Login Page</div>
      <input type="text" />
      <button onClick={() => {
        localStorage.setItem('token', 'xxxxxxxxxxxxx')
        this.props.history.push('/center')
      }}>Login</button>
    </>)
  }
}
