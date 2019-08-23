import React from "react";

function Jumbotron() {
    return (
        <div className="container mt-3 text-center">
            <div className="jumbotron jumbotron-fluid bg-dark">
                <h1 className="display-4 font-weight-bold text-white" style={{fontFamily: "courier"}}>REACT GOOGLE BOOK SEARCH</h1>
                <h3 className="font-weight-bold text-white">Search for and Save Cool Books!</h3>
            </div>
        </div>
    )
}

export default Jumbotron;