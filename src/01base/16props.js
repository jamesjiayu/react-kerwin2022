import React, { Component } from 'react'
import Navbar from './Navbar' //如果只有1个js，就可以省略写
import Sidebar from './Sidebar'
export default class PropApp extends Component {
  render () {
    let ch = this.props.children//null, "string",[1,2,2,5,5]
    console.log(ch)
    ch = React.Children.toArray(ch)//null=>[], "string"=>["string"]
    console.log('React.Children.toArray(ch) : ', ch)
    return (
      <div>
        <div> <h1>HOME</h1>
          <Navbar title='home' rightShow={false} >Home</Navbar>
        </div>
        <div> <h1>Page2</h1>
          <Navbar title='page2' rightShow={true} leftShow={true}>Page2</Navbar>
        </div>        <div> <h1>page3</h1>
          <Navbar title='surprise!' rightShow={true} leftShow={true}>Page3</Navbar>
        </div>
        <Sidebar bg='red'>SidebarChildren</Sidebar>
      </div>
    )
  }
}
