import React from "react";
import "./style.css";

function ImageDiv(props) {
    return (
        <div className="img-container">
            <img src={props.image} alt={props.name} className="img-fluid z-depth-2 rounded img-item" />
        </div>
    );
}

export default ImageDiv;