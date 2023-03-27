import { fromJS } from 'immutable'
import React, { Component } from 'react'

export default class InfoListMap extends Component {
  state = {
    info: fromJS({
      myname: 'James',
      location: {
        state: 'TX',
        city: 'Dallas'
      },
      favors: ['basketball', 'coding', 'sunshine']
    })
  }
  handleDel = (val) => {
    // const newFavors = this.state.info.get('favors').filter(item => val !== item)
    // this.setState({ info: this.state.info.set('favors', newFavors) })
    this.setState({ info: this.state.info.updateIn(['favors'], (list) => list.filter(item => val !== item)) })
  }
  handleChangeLocation = () => {
    // this.setState({
    //   info: this.state.info.set('location', Map({
    //     state: 'TX',
    //     city: 'Lewisville'
    //   }))
    // })
    this.setState({
      info: this.state.info.setIn(['location', 'state'], 'CA')
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
