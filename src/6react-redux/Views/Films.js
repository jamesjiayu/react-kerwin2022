import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Comingsoon from './films/Comingsoon'
import Nowplaying from './films/Nowplaying'
export default class Films extends Component {
  render () {
    return (<>
      <div>Films</div>
      <Switch>
        <Route path='/films/nowplaying' component={Nowplaying}></Route>
        <Route path='/films/comingsoon' component={Comingsoon}></Route>
        <Redirect from='/films' to='/films/nowplaying'></Redirect>
      </Switch>
    </>)
  }
}

