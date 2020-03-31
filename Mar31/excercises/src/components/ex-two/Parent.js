import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
    render() {
        return (
            <div style={{ backgroundColor: 'white', paddingLeft: "10px" }}>
                Parent
                <br />
                <Child />
            </div>
        )
    }
}

export default Parent
