import React, { Component, createContext, useContext, useState, useEffect } from 'react'
const xContext = React.createContext()
function Item (props) {
  let { id, content } = props
  const val = useContext(xContext)
  return (
    <>
      <div>{content} </div>
      <button onClick={() => {
        val.changeInfo(id)
      }}> show ID </button>
    </>
  )
}
function Details () {
  const val = useContext(xContext)
  // console.log(val)
  return (
    <h4>ID Details: {val.info}</h4>
  )
}
export default function ContextAPP () {
  const url = 'http://localhost:3001/tasks'
  const [info, setinfo] = useState('')
  const [tasks, settasks] = useState([])
  useEffect(() => {
    fetch(url).then(res => res.json()) //fetch('/manifest.json')省略in public
      .then(tasks => settasks(tasks))
      .catch(err => console.log(err))
  }, [])
  return (
    <xContext.Provider value={{
      call: 'calling sb',
      sms: 'text  sb',
      info: info,
      changeInfo: (val) => setinfo(val)
    }}>
      <>
        <h3>Todo List</h3>
        {tasks.map(task => //<li key={task.id}>{task.content} </li>)}
          <Item key={task.id} {...task} > </Item>)}
        <Details info={info} />
      </>
    </xContext.Provider>
  )

}
