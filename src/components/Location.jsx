import React from 'react'
import { Link } from 'react-router-dom'
import folder from '../assets/folder.png'

const Location = (props) => {
    return (
        <Link to={props.url} style={{ textDecoration: "none", color: "darkgray", float: "left", marginRight: "1rem", textAlign: "center" }}>
            <img src={folder} alt={props.name} style={{ width: "100px" }} />
            <h6>{props.name}</h6>
        </Link>
    )
}

export default Location
