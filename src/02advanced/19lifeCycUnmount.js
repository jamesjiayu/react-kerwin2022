import React, { Component } from 'react'

class Child extends Component {
  render () {
    return (
      <div>CHILD</div>
    )
  }
  componentDidMount () {
    window.onresize = function () {
      console.log('window.onresize')
    }
    //this
    this.timer = setInterval(() => {
      console.log('interval in didMount')
    }, 1000)
  }
  componentWillUnmount () {
    console.log('componentWillUnmount')
    //window.removeEventListener('resize', () => { })
    window.onresize = null
    clearInterval(this.timer)
  }
}
export default class LifeCycUnmount extends Component {
  state = { isShow: true }
  render () {
    return (
      <>
        {this.state.isShow && <Child />}
        <button onClick={() => this.setState({ isShow: !this.state.isShow })}>isShow</button>
      </>
    )
  }
}
