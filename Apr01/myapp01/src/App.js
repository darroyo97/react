import React, { Component } from 'react'
// import Child from './componets/Child'
import Stepper from './componets/Stepper'
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
        {/* <Child /> */}
        <Stepper />
      </div>
    )
  }
}

export default App

