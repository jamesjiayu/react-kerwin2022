import React, { Component } from 'react'

export default class CasegetSnapshotBeforeUpdate extends Component {
  state = { list: [1, 2, 3, 4, 6, 5, 6, 7, 8, 9, 1, 0] }
  myref = React.createRef()
  getSnapshotBeforeUpdate () {
    const value = this.myref.current.scrollHeight
    console.log('getSnapshotBeforeUpdate', value)
    return value
  }
  componentDidUpdate (prevProps, prevState, value) {
    console.log('componentDidUpdate', this.myref.current.scrollHeight)
    this.myref.current.scrollTop += this.myref.current.scrollHeight - value
    // += // this.myref.current.scrollTop = this.myref.current.scrollHeight - value
  }
  render () {
    return (
      <div>
        <button onClick={
          () => this.setState({ list: [...[11, 11, 22, 33, 44, 55, 66, 77, 88,], ...this.state.list] })}
        >email coming</button>

        <div ref={this.myref} style={{ height: '300px', overflow: 'auto' }}><ul>
          {this.state.list.map((item, index) =>
            <li key={index} style={{ background: 'yellow', height: '100px' }}>{item}</li>)}
        </ul></div>
      </div>
    )
  }
}
