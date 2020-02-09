import React from "react";
import "./style.css";

function Scores(props) {
    return <div className="gameScore">
        <center><h4 className="score">Your Score: {props.total} Top Score: {props.highScore}</h4></center>
    </div>
};

export default Scores;