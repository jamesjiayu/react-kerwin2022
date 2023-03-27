import React, { useState } from 'react'
import { connect } from 'react-redux'
//import store from '../../Redux/Store'
function City (props) {
  const [cityList, setCityList] = useState(['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen'])
  return (<>
    <ul>
      {cityList.map(city => <li key={city} onClick={() => {
        props.change(city)
        //store.dispatch({ type: 'changeCity', payload: city })
        // props.history.push('/cinemas')
        props.history.goBack()
      }}><h4>{city}</h4></li>)}
    </ul>
  </>)
}
const mapDispatchToProps = {
  change (city) {
    return { type: 'changeCity', payload: city }
  }
}
export default connect(null, mapDispatchToProps)(City)
