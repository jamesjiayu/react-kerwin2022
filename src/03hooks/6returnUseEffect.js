import React, { Component, useEffect } from 'react'
function Child () {
  useEffect(() => {
    window.onresize = function () {
      console.log('window.onresize')
    }
    const timer = setInterval(() => {
      console.log('interval in useEff fn')
    }, 1000)
    return () => {
      console.log('in useEff return')
      window.onresize = null
      clearInterval(timer)
    }
  }, [])
  return (
    <div>6returnUseEffect</div>
  )
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
