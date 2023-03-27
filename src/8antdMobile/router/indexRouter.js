import React, { Component } from 'react'
import { HashRouter, Route, Redirect, Switch, BrowserRouter as BRouter } from 'react-router-dom'
import Films from '../Views/Films'
import Center from '../Views/Center'
import Cinemas from '../Views/Cinemas'
import NotFound from '../Views/NotFound89react-reduxHOC'
import Detail from '../Views/films/Detail'
import Login from '../Views/Login'
import City from '../Views/films/City'
import Search from '../Views/Search'
function isAuth () {
  return localStorage.getItem('token')
}
export default class indexRouter extends Component {
  render () {
    return (
      <>
        <HashRouter>
          {this.props.children}
          <Switch>
            <Route path='/films' component={Films}></Route>
            <Route path='/cinemas' component={Cinemas} exact></Route>
            <Route path='/cinemas/search' component={Search}></Route>
            {/* <Route path='/center' component={Center}></Route> */}
            <Route path='/center' render={(props) => {
              // console.log('props in the indexRouter callback render', props)
              return isAuth() ? <Center a={111} b="B" {...props} c={props.history} /> : <Redirect to='/login'></Redirect>
            }}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/city' component={City}></Route>
            <Route path='/detail/:myid' component={Detail}></Route>
            <Redirect from="/" to="films" exact></Redirect>
            <Route component={NotFound}></Route>
          </Switch>

        </HashRouter>
      </>
    )
  }
}
