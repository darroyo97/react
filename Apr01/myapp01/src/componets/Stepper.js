import React from 'react';
import PropTypes from 'prop-types';

class Stepper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startNum: 3
        }
    }
    handleAdd = () => {
        console.log("add button")
        this.setState({ startNum: this.state.startNum + 1 })
    }
    handleSub = () => {
        console.log("sub button")
        this.setState({ startNum: this.state.startNum - 1 })
    }

    render() {
        return (
            <>
                {this.state.startNum}
                <br />
                <button onClick={this.handleSub}> Subtract </button>
                <button onClick={this.handleAdd}> Add </button>
            </>
        );
    }
}


// Stepper.propTypes = {

// };

export default Stepper
