import React, { Component } from 'react'
const url = 'http://localhost:3001/tasks'
class Item extends Component {
  render () {
    // console.log(this.props)
    let { id, content, evt } = this.props
    return (<>
      <div>{content} </div><button onClick={() => {
        evt(id)
      }}> show </button>
    </>
    )
  }
}
class Details extends Component {
  render () {
    return (<>
      <h4>Details: {this.props.info}</h4>
    </>
    )
  }
}
export default class ContextAPP extends Component {
  state = { tasks: [], info: '' }
  componentDidMount () {
    fetch(url).then(res => res.json()) //fetch('/manifest.json')
      .then(tasks => this.setState({ tasks }))
      .catch(err => console.log(err))
  }
  render () {
    return (
      <>
        <h3>Todo List</h3>
        {this.state.tasks.map(task => //<li key={task.id}>{task.content} </li>)}
          <Item key={task.id} {...task} evt={(val) => {
            this.setState({ info: val })
          }}> </Item>)}

        <Details info={this.state.info} />

      </>
    )
  }
}
