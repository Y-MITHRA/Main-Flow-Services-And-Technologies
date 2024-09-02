import React from "react";
import "../index.css";

function MainContent() {
    return (
        <main>
            <div className="book-gallery">
                <img src="../images/book1.jpg" className="book-image" alt="Book 1" />
                <img src="../images/book2.jpg" className="book-image" alt="Book 2" />
                <img src="../images/book3.jpg" className="book-image" alt="Book 3" />
            </div>
            <div className="intro-text">
                <h1>Welcome to My Book Library</h1>
                <p>Discover and explore our vast collection of books.</p>
            </div>
        </main>
    )
}

export default MainContent;
