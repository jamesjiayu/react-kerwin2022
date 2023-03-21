import React, { Component } from 'react'

export default class Ref extends Component {
  myRef = React.createRef()
  // console.log ('myRef', this.myRef)
  //b=1
  render () {
    // const a=10
    return (
      <div>
        <input type="text" ref='myText' />
        <input type="text" ref={this.myRef} />
        <button onClick={() => {
          // console.log(this.refs.myText.value)
        }}>refClick1</button>
        <button onClick={() => {
          console.log(this.myRef)
          console.log(this.myRef.current)
          console.log(this.myRef.current.value)
        }}
        >ref</button>
      </div >
    )
    // onClick={console.log(this.myRef)}// immedetely execute it
  }
}
