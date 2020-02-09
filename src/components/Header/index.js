import React from "react";

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav">
                <div className="navbar-brand">Clicky Game!</div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <span className="navbar-text">
                        Click an Image to begin!    </span>
                </div>
            </nav>
            <div className="jumbotron jumbotron-fluid" id="jumbotron">
                <div className="container">
                    <center><h3>Click on an image to earn points, but don't click on any more than once!</h3></center>
                </div>
            </div>
        </div>
    )
};

export default Header;