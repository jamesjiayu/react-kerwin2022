import React, { Component } from 'react'
// const btn = document.getElementById('btn') //Event OBJECT from Browser
// btn.onclick = function () { console.log(this) } //who invoke handClick2
export default class Evt extends Component {
  a = 111
  handleClick2 () {
    console.log('handleClick2', this)// 事件代理 在root上。 
  }
  handleClick3 = (evt) => { //Event OBJECT from React
    console.log("handleClick3", this.a, evt) //SyntheticBaseEvent 
  }
  // ES7.  class A{a=2, fn=()=>{}} 
  handleClick4 () { //test this
    console.log("handleClick4", this.a)
  }
  // handleClick4 = () => {
  //   console.log("handleClick4", this.a)
  // }
  render () {
    return (
      <div>
        <input type="text" />
        <button onClick={() => {
          console.log("onCli1111", this.a)
        }}> add</button>
        <button onClick={this.handleClick2}> add2</button>
        {/* THIS: how to invoke a func in  class // who invoke handleClick2 */}
        <button onClick={this.handleClick2.bind(this)}> add222</button>

        <button onClick={this.handleClick3}> add3</button>
        <button onClick={() => {
          this.handleClick4()
        }}> add4</button>
        <button onClick={() => this.handleClick4()}> add4推荐 传参数 </button>
      </div>
    ) // onClick={function(){}} THIS problems.   //handleClick4()
  }
}
