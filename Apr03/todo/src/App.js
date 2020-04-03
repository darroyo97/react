import React, { Component } from 'react'
import './App.css'
import H2 from './components/H2'
import H1 from './components/H1'
import H3 from './components/H3'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      tasks: [],
      input: ""
    }
  }


  handleInput = (e) => {
    this.setState({
      inputTxt: e.target.value
    })
  }

  addTaskItem = () => {
    let input = this.state.inputTxt
    let tasks = this.state.tasks
    tasks.push(input);
    this.setState({
      tasks: tasks,
      inputTxt: ""
    }, () => {
      console.log(this.state.tasks)
    })
  }

  render() {

    let taskLists = this.state.tasks.map((tasks, index) => {
      return <li key={index}>{tasks}</li>
    })

    return (
      <div className="App">
        <div className="todo-form">
          <br />
          <H2 value={this.state.inputTxt} onChange={this.handleInput} />
          <H1 onClick={this.addTaskItem} />
          <br />

          {/* <ul>
          {taskLists}
        </ul> */}
          <H3 taskList={taskLists} />

        </div>
      </div>
    )
  }
}

export default App