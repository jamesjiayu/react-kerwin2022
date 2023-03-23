import React, { useState, useRef } from 'react'

export default function TodoUseState () {
  const [val, setVal] = useState('vvvvv')
  const [list, setList] = useState(['aa', 'aa', 'bb'])
  const mytextRef = useRef() //compare 
  const mycountRef = useRef(0)// keep the variable 
  // handleClick = () => { //error: 缺少keyword
  //   //setVal()
  // }
  function handleClick () {
    console.log(mytextRef)
    console.log(mytextRef.current.value)
    setList([mytextRef.current.value, ...list])
    // setVal('')
    mytextRef.current.value = ''
    console.log(mycountRef)
    mycountRef.current++
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
      <input type="text" ref={mytextRef} onChange={handleChange} />
      -{mycountRef.current}-<button onClick={handleClick}>Add</button>
      <ul>{list.map((item, index) => <li key={index}>{item}
        <button onClick={() => handelDel(index)}>delete</button></li>)
      }
      </ul>
      {!list.length && <div>no tasks to do</div>}
    </ React.Fragment>
  )
}
