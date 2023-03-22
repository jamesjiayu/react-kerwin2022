import React, { Component } from 'react'

class Child extends Component {
  render () {
    return (
      <>
        <div>child</div>
        {this.props.children[3]}
        {this.props.children[1]}
        {this.props.children[2]}

      </>
    )
  }
}

export default class Slot extends Component {
  render () {
    return (
      <React.Fragment>
        <div>parent</div>
        <Child>
          <div>000000000000</div>
          <div>1111111111</div>
          <div>222222222</div>
          <div>333333333</div>

        </Child>

      </React.Fragment>
    )
  }
}
