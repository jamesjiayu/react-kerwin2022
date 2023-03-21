import React, { Component } from 'react'
import './css/4style.css' //webPack create <style> in html

export default class Style extends Component {
  render () {
    let styleObj = { backgroundColor: "red", fontSize: '2rem' }
    return (
      <div >
        <div style={{ backgroundColor: 'yellow' }}>sth</div>
        <div style={styleObj}>2222222222</div>
        <div className='active'>className+Import //style.css/ webPack</div>
        <label htmlFor="inp">htmlFor input</label> <input type="text" id='inp' />
      </div>
    )
  }
}
