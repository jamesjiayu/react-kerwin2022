import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Comingsoon from './films/Comingsoon'
import Nowplaying from './films/Nowplaying'
import { Swiper, Image, Tabs } from 'antd-mobile'
//
export default class Films extends Component {
  state = { imgList: [] }
  componentDidMount () {
    // fetch('https://randomuser.me/api')
    //   .then((response) => response.json())
    //   .then(d => console.log(d))
    fetch('https://dog.ceo/api/breeds/image/random/3')
      .then(res => res.json())
      .then(data => {
        console.log(data.message[0])
        this.setState({ imgList: data.message })
      })
  }
  render () {
    return (<>
      <div>Films</div>
      <Swiper autoplay={true} loop={true} key='swiper'>
        {this.state.imgList.map(src => {
          return <Swiper.Item key={src}><Image src={src} width={200}></Image></Swiper.Item>
        })}
      </Swiper>
      <div style={{ position: 'sticky', top: '0', background: 'white' }}>
        <Tabs activeKey={this.props.location.pathname} onChange={(key) => this.props.history.push(key)}>
          <Tabs.Tab title='Now Playing' key='/films/nowplaying'>   </Tabs.Tab>
          <Tabs.Tab title='Coming Soon' key='/films/comingsoon'>  </Tabs.Tab>
        </Tabs>
      </div>
      <Switch>
        <Route path='/films/nowplaying' component={Nowplaying}></Route>
        <Route path='/films/comingsoon' component={Comingsoon}></Route>
        <Redirect from='/films' to='/films/nowplaying'></Redirect>
      </Switch>
      <ul>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
        <li>fddsssssssssssssss</li>
      </ul>
    </>)
  }
}

