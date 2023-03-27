import React from 'react'
import ReactDom from 'react-dom'
import App from './9immutable/6fromJS'
//import 'antd/dist/reset.css'
import { Provider } from 'react-redux'
import store from './8antdMobile/Redux/Store'

import { jsx as _jsx } from "react/jsx-runtime"
/*#__PURE__*/_jsx("h1", {
  children: "hi"
})
console.log('babel: ', _jsx("h1", {
  children: "hi"
}))
console.log(React.createElement("div", null, "hhhhhhhhh"))

ReactDom.render(//<Provider store={store}>
  <App test='test1' >asdf</App>
  //</Provider>
  , document.getElementById('root'))
