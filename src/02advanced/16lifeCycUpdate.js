import React, { Component } from 'react'
class Box extends Component {
  shouldComponentUpdate (nextProps, nextState) { //not easy to understand
    if (this.props.current === this.props.index || nextProps.current === nextProps.index) {
      return true //nextProps, no this.nextProps
    }
    return false
  }
  render () {
    console.log('render in Child')
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
      <input type="number" value={this.state.current}
        onChange={(evt) => {
          //console.log(evt)
          this.setState({ current: Number(evt.target.value) })
        }} />
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
