import React from 'react'
import { Home, User, Message, Work } from "../icons"

function ChangeIcon({type}) {

    return (
        <>
            {type === "home" ? <Home className="icons"/> : ""}
            {type === "about" ? <User className="icons"/> : ""}
            {type === "portfolio" ? <Work className="icons"/> : ""}
            {type === "contact" ? <Message className="icons"/> : ""}
        </>
    )
}

export default ChangeIcon