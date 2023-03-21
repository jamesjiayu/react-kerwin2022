import React, { Component } from 'react'

export default class SetStateApp extends Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count)
    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count)
    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count)
    console.log(this.state.count)
    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log('after the setSate Update, in the callback', this.state.count)
    })

  }
  handleClick2 = () => {
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1
      })
      console.log('1st:', this.state.count)
      this.setState({
        count: this.state.count + 1
      })
      console.log('2nd: ', this.state.count)
      this.setState({
        count: this.state.count + 1
      })
      console.log('3rd: ', this.state.count)
    }, 0)
  }
  render () {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.count}</button>
        <button onClick={this.handleClick2}>add2</button>

      </div>
    )
  }
}
