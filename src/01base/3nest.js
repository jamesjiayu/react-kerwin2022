import React, { Component } from 'react'

class Navbar extends Component {
  render () {
    return <div>Navbar</div>
  }
}
class Swiper extends Component {
  render () {
    return <div>Swiper <Pic></Pic></div>
  }
}
class Pic extends Component {
  render () {
    return <img src="something" alt="sth" />
  }
}
export default class Nest extends Component {
  render () {
    return (
      <div><Navbar />
        <Swiper /> </div>
    )
  }
}
