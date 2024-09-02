import React from "react";
import "../index.css"; // Import the CSS

function Sidebar() {
    return (
        <div className="sidebar">
            <h2 className="sidebar-title">Library</h2>
            <ul className="sidebar-menu">
                <li>My Books</li>
                <li>Add New</li>
                <li>Favorites</li>
                <li>Settings</li>
                <li>Logout</li>
            </ul>
        </div>
    );
}

export default Sidebar;
