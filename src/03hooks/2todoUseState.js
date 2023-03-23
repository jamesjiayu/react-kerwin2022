import React, { useState } from 'react'

export default function TodoUseState () {
  const [val, setVal] = useState('vvvvv')
  const [list, setList] = useState(['aa', 'aa', 'bb'])
  // handleClick = () => { //缺少keyword
  //   //setVal()
  // }
  function handleClick () {
    setList([val, ...list])
    setVal('')
  }
  function handleChange (evt) {
    console.log(evt.target.value)
    setVal(evt.target.value)
  }
  const handelDel = (i) => {
    // const newList = list.filter((item, index) => {
    //   return index === i ? false : true
    // }) //not map() 
    const newList2 = [...list]
    newList2.splice(i, 1)
    setList(newList2)
  }
  return (
    <React.Fragment>
      <input type="text" value={val} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
      <ul>{list.map((item, index) => <li key={index}>{item}
        <button onClick={() => handelDel(index)}>delete</button></li>)
      }
      </ul>
      {!list.length && <div>no tasks to do</div>}
    </ React.Fragment>
  )
}
