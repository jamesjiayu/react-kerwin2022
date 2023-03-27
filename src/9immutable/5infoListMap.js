import { List, Map } from 'immutable'
import React, { Component } from 'react'

export default class InfoListMap extends Component {
  state = {
    info: Map({
      myname: 'James',
      location: Map({
        state: 'TX',
        city: 'Dallas'
      }),
      favors: List(['basketball', 'coding', 'sunshine'])
    })
  }
  handleDel = (val) => {
    const newFavors = this.state.info.get('favors').filter(item => val !== item)
    console.log(newFavors)
    this.setState({ info: this.state.info.set('favors', newFavors) })
  }
  handleChangeLocation = () => {
    this.setState({
      info: this.state.info.set('location', Map({
        state: 'TX',
        city: 'Lewisville'
      }))
    })
  }
  handleChangeName = () => {
    this.setState({
      info: this.state.info.set('myname', 'Jimmy')
    })
  }
  render () {
    //console.log(this.state.info.get('favors').get(0))
    return (
      <><h1>Info:</h1>

        <div>
          Name:{this.state.info.get('myname')}
          <button onClick={() => this.handleChangeName()}>Change</button>
        </div>
        <div>
          Location: {this.state.info.get('location').get('city')
            + ', ' + this.state.info.get('location').get('state')}
          <button onClick={() => this.handleChangeLocation()}>Change2</button>
        </div>
        <div>
          Favors: {this.state.info.get('favors').map(item =>
            <li key={item}>{item}<button onClick={() => this.handleDel(item)}>Delete</button> </li>)}
        </div>

      </>
    )
  }
}
