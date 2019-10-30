import React from "react";
import "./style.css";

function Jumbotron() {
    return (
        <div className="card card-image mt-5 pt-4">
            <div className="text-white text-center rgba-stylish-strong py-5 px-4">
                <div className="py-5">
                    <h1 className="card-title display-4 my-4 py-3"><strong>Marvel Clicky Game</strong></h1>
                    <p className="lead mb-5 pb-4 px-md-5 mx-md-5">
                        Click on any image to begin, but don't click on any more than once!</p>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;