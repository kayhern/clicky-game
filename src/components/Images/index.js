import React from "react";
import "./style.css";

function Characters(props) {
    return (
        <div className="card" id={props.id}>
            <div className="img-container" id={props.id}>
                <img alt={props.name} src={props.image} id={props.id} />
            </div>
        </div>
    );
}

export default Characters;