import React from 'react';
import PropTypes from 'prop-types';

class Child extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                <h1>{this.props.txt}</h1>
                {3 * this.props.integer}
            </>
        );
    }
}


Child.propTypes = {
    txt: PropTypes.string,
    integer: PropTypes.number
};

export default Child
