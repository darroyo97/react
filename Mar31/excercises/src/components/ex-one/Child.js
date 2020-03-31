import React, { Component } from 'react'
import Grandchild from './Grandchild'

class Child extends Component {
    render() {
        return (
            <>
                Child
                <br />
                <Grandchild />

            </>
        )
    }
}

export default Child
