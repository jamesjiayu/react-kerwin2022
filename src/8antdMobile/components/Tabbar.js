import React, { Component } from 'react'
//import { NavLink } from 'react-router-dom'
import style from './Tabbar.module.css'
import { TabBar } from 'antd-mobile'
import {
  AppOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'
import { withRouter } from 'react-router-dom'
//import  './Tabbar.module.css'
//console.log('module.style in Tabbar: ', style)
class JamesTabbar extends Component {
  componentDidMount () {
    console.log('props: ', this.props)
  }
  tabs = [
    {
      key: '/films',
      title: 'Films',
      icon: <AppOutline />,
      // badge: Badge.dot,
    },
    {
      key: '/cinemas',
      title: 'Cenimas',
      icon: <UnorderedListOutline />,
      badge: '5',
    },

    {
      key: '/center',
      title: '我的',
      icon: <UserOutline />,
    },
  ]
  setRouteActive = (value) => {
    // console.log(value)
    this.props.history.push(value)
  }
  render () {
    return (
      <div className={style.tabbar}>
        <TabBar onChange={key => this.setRouteActive(key)}
          activeKey={'/' + this.props.location.pathname.split('/')[1]} >
          {this.tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
    )
  }
}
export default withRouter(JamesTabbar)
// {/* <ul>
// {/* <a href="#/films">Films</a> */}
// <li> <NavLink to="/films" activeClassName={style.j + ' another-class-name'}>Films</NavLink></li>
// <li> <NavLink to="/cinemas" activeClassName={style.j}>Cenimas</NavLink></li>
// <li> <NavLink to="/center" activeClassName={style.j}>My Center</NavLink></li>
// </ul> */}