import React, { Component, createContext } from 'react'
const url = 'http://localhost:3001/tasks'
const xContext = React.createContext()
class Item extends Component {
  render () {
    // console.log(this.props)
    let { id, content, evt } = this.props
    return (
      <xContext.Consumer>
        {(val) => (<>
          <div>{content} </div>
          <button onClick={() => {
            val.changeInfo(id)
          }}> show ID </button>
        </>)}
      </xContext.Consumer>
    )
  }
}
class Details extends Component {
  render () {
    return (<xContext.Consumer>
      {(val) => <h4>ID Details: {val.info}</h4>}
    </xContext.Consumer>
    )
  }
}
export default class ContextAPP extends Component {
  state = { tasks: [], info: '' }
  componentDidMount () {
    fetch(url).then(res => res.json()) //fetch('/manifest.json')省略in public
      .then(tasks => this.setState({ tasks }))
      .catch(err => console.log(err))
  }
  render () {
    return (
      <xContext.Provider value={{
        call: 'calling sb',
        sms: 'text  sb',
        info: this.state.info,
        changeInfo: (val) => this.setState({ info: val })
      }}>
        <>
          <h3>Todo List</h3>
          {this.state.tasks.map(task => //<li key={task.id}>{task.content} </li>)}
            <Item key={task.id} {...task} > </Item>)}
          <Details info={this.state.info} />
        </>
      </xContext.Provider>
    )
  }
}
