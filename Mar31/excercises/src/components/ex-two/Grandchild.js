import React, { Component } from 'react'

class Grandchild extends Component {
    render() {
        return (
            <div style={{ backgroundColor: 'white', paddingLeft: "10px" }}>
                I'm Grandchild
            </div>
        )
    }
}

export default Grandchild
