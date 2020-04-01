import React, { Component } from 'react'
import Child from './componets/Child'
class App extends Component {
  render() {
    // let people = ['Dani', 'Jasso', 'Juan', 'Gio', 'Jackie']
    return (
      // <ul>
      //   {
      //     people.map((person, index) => {
      //       return <li key={index}>{person}</li>
      //     })
      //   }
      // </ul>
      <div>
        <Child txt={"Hello World"} integer={4} />
      </div>
    )
  }
}

export default App

