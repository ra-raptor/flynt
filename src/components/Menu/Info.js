import React from 'react'

function Info(props) {
    let colors = ["#32c766","#0057ff","#f48024","#d62f2f","#333"]
    let spanStyle = {
        color: "#fff",
        fontWeight:"bold",
        backgroundColor:colors[props.id-1],
        padding:"0px 5px"
    }
    return (
        <div className="info">
            <span style={spanStyle}>{6-props.id} {props.id<5?"Lives":"Life"}</span>  Press <code>FLY</code> if the object flies, <br />ignore if it flyn't
        </div>
    )
}

export default Info
