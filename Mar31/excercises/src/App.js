import React, { Component } from 'react'
import Parent from './components/ex-two/Parent'
import Simplelist from './components/Simplelist'
class App extends Component {
  render() {
    return (
      <div>
        {/* Our app */}
        <br />
        <Simplelist />

      </div>
    )
  }
}

export default App
