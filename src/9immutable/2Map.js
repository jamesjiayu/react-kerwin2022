import React, { Component } from 'react'
import { Map } from 'immutable'
let obj = { myname: 'james', age: 100 }
let objImmu = Map(obj)
let newObjImmu = objImmu.set('age', 9).set('name', 'Jim')
console.log('immutable: ', objImmu, newObjImmu)
console.log('get()', objImmu.get('age'))
console.log('toJS()', objImmu.toJS())

export default class MapImmu extends Component {
  render () {
    return (
      <div>immutable</div>
    )
  }
}
