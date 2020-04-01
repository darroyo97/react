import React, { Component } from 'react'
// import Parent from './components/ex-two/Parent'
// import Simplelist from './components/Simplelist'
// import Simpledropdown from './components/Simpledropdown'
import { Container, Row, Col } from 'react-bootstrap'
import { Dropdown } from 'react-bootstrap'
import Bootdrop from './components/Bootdrop'
import Calculator from './components/Calculator'

// let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
let calc = ["X", "+", "=", "-"]
class App extends Component {
  render() {
    return (

      <Calculator />
      // <Container fluid>
      //   <Row>
      //     <Col md={{ span: 4, offset: 4 }}>
      //       {/* <Simpledropdown days={daysOfWeek} /> */}
      //       <Bootdrop days={daysOfWeek} />
      //     </Col>
      //   </Row>


      // </Container>
      // <div>
      //   {/* Our app */}
      //   <br />
      //   <Simpledropdown days={daysOfWeek} />

      // </div>
    )
  }
}

export default App
