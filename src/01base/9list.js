import React, { Component } from 'react'

export default class ListApp extends Component {
  state = {
    list: [111, 222, 333, 444]
  }
  render () {
    return (
      <div><ul>
        {
          this.state.list.map((item, index) => <li key={index} >{item}</li>)
        }
      </ul></div>
    )
  }
}
