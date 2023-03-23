import React, { Component } from 'react'
const url = "http://localhost:3001/tasks/"
export default class TodolistClass extends Component {
  constructor(props) {
    super(props)
    this.state = { val: '', list: [] }
  }
  componentDidMount () {
    const newList2 = []
    fetch(url).then(response => response.json()).then(tasks => {
      // tasks.forEach((task) => {
      //   newList2.push(task.content)
      // })
      this.setState({ list: tasks.reverse() })
    }).catch(reason => console.log(reason))

  }
  handleChange = (evt) => {
    // console.log(evt.target.value)
    this.setState({ val: evt.target.value })
  }
  handleClick = () => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ content: this.state.val }),
      headers: { "Content-Type": "application/json" }
    }).then(res => res.json()).then(newTask => {
      this.setState({ list: [newTask, ...this.state.list] })
      this.setState({ val: '' }) // out of then?
    }).catch(reason => console.log(reason))
  }
  //[,{id: 2, content: 'coding'},]
  handelDel = (id) => {
    fetch(url + id, {
      method: 'DELETE'
    }).then(para => {
      this.setState({
        list: this.state.list.filter(task => id !== task.id)
      })
    }).catch(reason => console.log(reason))
  }
  render () {
    return (
      <React.Fragment>
        <h1>To-do Lists</h1>
        <input type="text" value={this.state.val} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add</button>
        <ul>{this.state.list.map((task, index) =>
          <li id={task.id} key={task.id}>{task.content}
            <button onClick={() => this.handelDel(task.id)}>delete</button></li>)
        }
        </ul>
        {!this.state.list.length && <div>no tasks to do</div>}
      </React.Fragment>
    )
  }
}
