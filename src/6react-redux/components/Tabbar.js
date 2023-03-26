import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import style from './Tabbar.module.css'
//import  './Tabbar.module.css'
//console.log('module.style in Tabbar: ', style)
export default class Tabbar extends Component {
  render () {
    return (
      <div className={style.tabbar}>
        <ul>
          {/* <a href="#/films">Films</a> */}
          <li> <NavLink to="/films" activeClassName={style.j + ' another-class-name'}>Films</NavLink></li>
          <li> <NavLink to="/cinemas" activeClassName={style.j}>Cenimas</NavLink></li>
          <li> <NavLink to="/center" activeClassName={style.j}>My Center</NavLink></li>

        </ul>
      </div>
    )
  }
}
