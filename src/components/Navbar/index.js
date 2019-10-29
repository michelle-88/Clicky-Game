import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar navbar-dark red darken-4 justify-content-between mb-3">
            <span className="navbar-brand" href="#"><strong>Marvel Clicky Game</strong></span>
            <span id="answer-text" className="navbar-text white-text">Click an image to begin!</span>
            <span id="score-text" className="navbar-text white-text">
                Score: {props.score} | Top Score: {props.topScore}
            </span>
        </nav>
    )
}

export default Navbar;