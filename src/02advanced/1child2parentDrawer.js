import React, { Component } from 'react'

export default class Child2parent extends Component {
  state = { isShow: false }
  handler = () => {
    console.log('in the Parent')
    this.setState({ isShow: !this.state.isShow })
  }
  render () {
    return (
      <div>
        <Navbar title='navbarProps' myevent={this.handler}></Navbar>
        {this.state.isShow && <Sidebar ></Sidebar>}
      </div>
    )
  }
}

class Navbar extends Component {
  render () {
    const { title, myevent } = this.props
    // myevent()
    return (
      <div>
        <div style={{ background: 'green', width: '100%' }}>{title}</div>
        <button onClick={() => {
          myevent() //this.props.myevent()
        }}      >Child2parent</button>
      </div>
    )
  }
}
class Sidebar extends Component {
  render () {
    return (
      <div style={{ backgroundColor: "red", width: "100px" }}>
        <ul>
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
        </ul>
      </div >
    )
  }
}