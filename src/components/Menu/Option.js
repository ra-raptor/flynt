import React from 'react'

function Option(props) {

    let handleClick = () => {
        props.handler(props.id,props.value)
    }
    return (
        <div onClick={handleClick}>
            <span>{props.value}</span>
        </div>
    )
}

export default Option
