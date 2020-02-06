import React from "react";

function Clicky() {
    return (
        <div className="container">
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
                <span className="navbar-text" id="score">
                    |  Top Score: 0
    </span>
            </nav>
            <div className="jumbotron jumbotron-fluid" id="jumbotron">
                <div className="container">
                    <center><h3>Click on an image to earn points, but don't click on any more than once!</h3></center>
                </div>
            </div>
            {/* ////row one of images */}
            <div className="containera">
                <div className="row">
                    <div className="col-sm" id="one">
                        IMAGE ONE
    </div>
                    <div className="col-sm" id="two">
                        IMAGE TWO    </div>
                    <div className="col-sm" id="three">
                        IMAGE THREE    </div>
                </div>
            </div>
            {/* ///row two of images  */}
            <div className="containerb">
                <div className="row">
                    <div className="col-sm" id="four">
                        IMAGE ONE
    </div>
                    <div className="col-sm" id="five">
                        IMAGE TWO    </div>
                    <div className="col-sm" id="six">
                        IMAGE THREE    </div>
                </div>
            </div>
            {/* ///row three of images */}
            <div className="containerc" >
                <div className="row">
                    <div className="col-sm" id="seven">
                        IMAGE ONE
    </div>
                    <div className="col-sm" id="eight">
                        IMAGE TWO    </div>
                    <div className="col-sm" id="nine">
                        IMAGE THREE    </div>
                </div>
            </div>
            {/* ///row four of images */}
            <div className="containerd">
                <div className="row">
                    <div className="col-sm" id="ten">
                        IMAGE ONE
    </div>
                    <div className="col-sm" id="eleven">
                        IMAGE TWO    </div>
                    <div className="col-sm" id="twelve">
                        IMAGE THREE    </div>
                </div>
            </div>
            {/* //END OF IMAGES */}
            <div className="footer" id="footer">
                <div className="bottom">
                    "Clicky Game!" <img src="../logo192.png" height="20px" width="20px"></img>
                    <br></br>
                    <br></br>
                </div>
            </div>
        </div>
    );
};

export default Clicky;
