import React, { Component } from 'react'
import './App.css'

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
    // get current value of our inputTXT
    let input = this.state.inputTxt
    //current array
    let tasks = this.state.tasks
    //push
    tasks.push(input);
    this.setState({
      tasks: tasks,
      inputTxt: ""
    }, () => {
      console.log(this.state.tasks)
    })
    // this.setState({}, () => {

    // } )
  }

  render() {

    // let {tasks, inputTxt} = this.state 
    let taskList = this.state.tasks.map((tasks, index) => {
      return <li key={index}>{tasks}</li>
    })

    return (
      <div className="todo-form">
        <br />
        <input type="text" value={this.state.inputTxt} onChange={this.handleInput} />

        <button onClick={this.addTaskItem}>Add Task</button>
        <br />

        <ul>
          {taskList}
        </ul>
      </div>
    )
  }
}

export default App