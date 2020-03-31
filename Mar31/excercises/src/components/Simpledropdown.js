import React, { Component } from 'react'


class Simpledropdown extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.days)
        let arrayDays = this.props.days
        let daysList = arrayDays.map((day, index) =>
            <option key={index}> {day} </option>
        )
        return (
            <select>
                {daysList}
            </select>
        )
    }
}

export default Simpledropdown


