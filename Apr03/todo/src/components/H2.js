import React from 'react'

const H2 = (props) => {
    return (
        <>
            <input type="text" value={props.value} onChange={props.onChange} />
        </>
    )
}

export default H2