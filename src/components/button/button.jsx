import React from "react"

function Button(props) {
    return (
       
    <a href={props.href} className="btn">{props.text}</a>
    )
}

export default Button