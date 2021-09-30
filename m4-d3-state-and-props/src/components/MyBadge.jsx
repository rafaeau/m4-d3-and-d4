import React from 'react'
import Badge from 'react-bootstrap/Badge'

function MyBadge(props) {
    return (
        <div className="text-center">
            <h4><Badge variant={props.color}>{props.text}</Badge>{' '}</h4>
        </div>
    )
}

export default MyBadge
