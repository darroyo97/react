import React from 'react';
import PropTypes from 'prop-types';

class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txt: 'this is a text value',
            num1: 3,
            num2: 12
        }

        // setTimeout((params) => {
        //     this.setState({ txt: "Hello World" })
        // }, 2000)

    }

    handleUpdate = () => {

        console.log('button was clicked')
        // this.setState({ txt: "Hello World" })
        this.setState({ num1: this.state.num1 + 1 })

    }

    render() {
        return (
            <>
                {/* <h1>{this.props.txt}</h1>
                {3 * this.props.integer} */}
                {this.state.txt}
                <br />
                {this.state.num1} + {this.state.num2} =
                {this.state.num1 + this.state.num2}
                <br />
                <button onClick={this.handleUpdate}> Click me </button>
            </>
        );
    }
}


// Child.propTypes = {
//     txt: PropTypes.string,
//     integer: PropTypes.number
// };

export default Child
