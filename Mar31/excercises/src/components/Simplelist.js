import React, { Component } from 'react'

class Simplelist extends Component {
    render() {
        let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        let daysList = days.map((day, index) =>
            <li key={index}>{day}</li>
        )
        return (
            <>
                <ul>
                    {daysList}
                </ul>
            </>
        )
    }
}

export default Simplelist
