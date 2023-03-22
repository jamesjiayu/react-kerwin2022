import React, { Component } from 'react'
class Box extends Component {
  render () {
    return (
      <div style={{
        width: '100px',
        height: '100px',
        border: this.props.current === this.props.index ? '3px solid red' : '1px solid gray',
        margin: '10px',
        float: 'left'
      }}>

      </div>
    )
  }
}
export default class LifeCycUpdate extends Component {
  state = {
    current: 0,
    list: ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]
  }
  render () {
    return (<React.Fragment>
      <input type="numver" />
      <div style={{ overflow: 'hidden' }}>
        {
          this.state.list.map((item, index) => <Box
            key={index} index={index}
            current={this.state.current} />)
        }
      </div>
    </React.Fragment>)
  }
}
