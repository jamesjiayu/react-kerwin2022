import React, { Component, useEffect } from 'react'

class NotFound extends Component {
  render () {
    console.log('in class notfound')
    return (
      <h2>404</h2>
    )
  }
}

// function NotFound (props) {
//   useEffect(() => {
//     console.log(props)
//   }, [])
//   return (
//     <h3>NotFound</h3>
//   )
// }

function jamesconnect (callback, objParam) {
  let obj = callback()
  return (MyComponent) => {
    return (props) => {
      //  console.log(myComponent)
      return <MyComponent {...obj} {...props} {...objParam} />
    }
  }
}
export default jamesconnect(() => {
  return { a: 11, b: 'HOC implatation' }
}, { aaaa () { } })(NotFound)