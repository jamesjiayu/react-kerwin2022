import React, { useState } from 'react'
import store from '../../Redux/Store'
export default function City (props) {
  const [cityList, setCityList] = useState(['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen'])
  return (<>
    <ul>
      {cityList.map(city => <li key={city} onClick={() => {
        store.dispatch({ type: 'changeCity', payload: city })
        // props.history.push('/cinemas')
        props.history.goBack()
      }}><h4>{city}</h4></li>)}
    </ul>
  </>)
}
