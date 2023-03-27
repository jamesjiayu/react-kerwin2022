import React from 'react'
import ReactDom from 'react-dom'
import App from './8antdMobile/app'
//import 'antd/dist/reset.css'
import { Provider } from 'react-redux'
import store from './8antdMobile/Redux/Store'
ReactDom.render(<Provider store={store}>
  <App />
</Provider>
  , document.getElementById('root'))