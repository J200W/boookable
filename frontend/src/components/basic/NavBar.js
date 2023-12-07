import React from "react";
import "src/css/NavBar.css";
// import logo
import logo from "src/assets/logo.png";

function NavBar() {
    return (
        <div className="navBar">
            <img src={logo} alt="logo" />
        </div>
    );
}

export default NavBar;
