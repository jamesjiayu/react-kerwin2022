import React, { Component } from 'react'
import jamesPropType from 'prop-types'
console.log(jamesPropType)
export default class Navbar extends Component {
  static propTypes1111 = { //propTypes 
    title: jamesPropType.string,
    leftShow: jamesPropType.bool,
    rightShow: jamesPropType.bool
  }
  // Warning: Failed prop type: Invalid prop....
  static defaultProps = {
    leftShow: true
  }
  render () {
    console.log(this.props)
    const { title, leftShow, rightShow } = this.props
    return (
      <div>
        {leftShow && <button>Go back</button>}
        {title}
        {rightShow && <button>Home</button>}
      </div>
    )
  }
}
// Navbar.propTypes = {
//   title: jamesPropType.string,
//   leftShow: jamesPropType.bool,
//   rightShow: jamesPropType.bool
// }
