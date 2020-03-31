import React, { Component } from 'react'
import Grandchild from './Grandchild.js'

class Child extends Component {
    render() {
        return (
            <div style={{ backgroundColor: 'pink', paddingLeft: "10px" }}>
                I'm Child
                <br />
                <Grandchild />

            </div>
        )
    }
}

export default Child
