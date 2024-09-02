import React from "react";
import "../index.css";

function Header() {
    return (
        <div className="header">
            <input type="text" className="search-bar" placeholder="Search books..." />
            <div className="user-profile">
                <button  className="login-button">Login</button>
                <button  className="register-button">Register</button>
            </div>
        </div>
    );
}

export default Header;
