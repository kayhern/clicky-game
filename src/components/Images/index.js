import React from "react";
import "./style.css";

function Characters(props) {
    return (
        <div
            className="img-container"
            id={props.id}
            onClick={() => props.handleClick(props.id)}>
            <img alt={props.name} src={props.image} id={props.id} />
        </div>
    );
}

export default Characters;