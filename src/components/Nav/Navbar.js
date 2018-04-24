import React from 'react'
import './navbar.css'

const Navbar = ({score=0, topscore=0, headermessage="Click an Image to Begin!", message=""}) => (

    <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container">
        <ul className="nav navbar-nav">
            <li><strong className="title" id="titleId">Album Memory</strong></li>
            <li><strong className="headermessage" id="headerId">{headermessage}</strong></li>
            <li className="score" id="scoreId">Score: {score} | Top Score: {topscore}</li>
        </ul>
    </div>
    </nav>
    )
export default Navbar;