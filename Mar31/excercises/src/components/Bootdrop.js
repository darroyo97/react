import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap'

class Bootdrop extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props.days)
        let arrayDays = this.props.days
        let daysList = arrayDays.map((day, index) =>
            <Dropdown.Item key={index}>{day}</Dropdown.Item>
        )
        return (
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
        </Dropdown.Toggle>

                <Dropdown.Menu>
                    {daysList}
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}

export default Bootdrop
