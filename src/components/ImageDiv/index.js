import React from "react";
import "./style.css";

function ImageDiv(props) {
    return (
        <div className="img-container">
            <span onClick={() => props.handleClick(props.id)} >
                <img src={props.image} alt={props.name} data-clicked={props.clicked} className="img-fluid z-depth-2 rounded img-item" />
            </span>
        </div>
    );
}

export default ImageDiv;