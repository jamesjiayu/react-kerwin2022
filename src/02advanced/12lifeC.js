import React, { Component } from 'react'

export default class LifeCyc extends Component {
  state = { life: 'newborn' }
  // componentWillMount () {
  //   this.setState({ life: 'almost go to tree' })
  //   console.log(document.getElementById('life'))
  // }
  componentDidMount () {
    console.log(document.getElementById('life'))
    //ajax// setInterval...//betterScroll
  }
  shouldComponentUpdate (nextProps, nextState) {
    if (JSON.stringify(this.state) !== JSON.stringify(nextState)) { return true }
    return false
  }
  componentDidUpdate (prevProps, prevState) {

  }
  render () {
    return (
      <div id='life'>{this.state.life}</div>
    )
  }
}
