import React from "react";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import BookGrid from "./Components/BookGrid";
import "./index.css"; 


function App() {
    return (
        <div className="app-container">
            <Sidebar />
            <div className="main-content">
                <Header />
                <BookGrid />
            </div>
        </div>
    );
}

export default App;
