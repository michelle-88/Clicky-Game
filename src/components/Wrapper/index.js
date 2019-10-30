import React from "react";
import "./style.css";

function Wrapper(props) {
    return <div className={`container ${props.shake ? "animated headShake" : ""}`}>{props.children}</div>;
}

export default Wrapper;