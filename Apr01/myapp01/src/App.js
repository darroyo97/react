import React, { Component } from 'react'
// import Child from './componets/Child'
import Stepper from './componets/Stepper'
import News from './News'
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
        {/* <Stepper /> */}
        <News />
      </div>
    )
  }
}

export default App

