import React, { Component } from 'react'

export default class Child2parent extends Component {
  state = { isShow: false }
  // handler = () => {
  //   console.log('in the Parent')
  //   this.setState({ isShow: !this.state.isShow })
  // }
  render () {
    return (
      <div>
        <Navbar title='navbarProps' myevent={this.handler}>
          <button onClick={() => this.setState((prevState) => { return { isShow: !prevState.isShow } })}
          >Click </button>
        </Navbar>
        {this.state.isShow && <Sidebar ></Sidebar>}
      </div>
    )
  }
}

class Navbar extends Component {
  render () {
    const { title } = this.props
    // myevent()
    return (
      <>
        <div style={{ background: 'green', width: '100%' }}>{title}</div>
        {this.props.children}
      </>
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