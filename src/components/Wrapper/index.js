import React from "react";
import "./style.css";

function Wrapper(props) {
    return <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav">
            <a className="navbar-brand">Clicky Game!</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <span className="navbar-text">
                    Click an Image to begin!    </span>
            </div>
            <span className="navbar-text" id="score">
                Score: 0  |
    </span>
            <span className="navbar-text" id="score1">
                |  Top Score: 0
    </span>
        </nav>
        <div className="jumbotron jumbotron-fluid" id="jumbotron">
            <div className="container">
                <center><h3>Click on an image to earn points, but don't click on any more than once!</h3></center>
            </div>
        </div>
        <div className="wrapper">{props.children}</div>
        <div className="footer" id="footer">
            <div className="bottom">
                "Clicky Game!" <img src="../logo192.png" height="20px" width="20px"></img>
                <br></br>
                <br></br>
            </div>
        </div>
    </div>
}

export default Wrapper;
