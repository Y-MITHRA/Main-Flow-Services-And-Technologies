import React from "react";
import "../index.css";
import book1 from "../images/book1.jpg";
import book2 from "../images/book2.jpg";
import book3 from "../images/book3.jpg";
import book4 from "../images/book4.jpg";
import book5 from "../images/book5.jpg";
import book6 from "../images/book6.jpg";
import book7 from "../images/book7.jpg";
import book8 from "../images/book8.jpg";
import book9 from "../images/book9.jpg";
import book10 from "../images/book10.jpg";
import book11 from "../images/book11.jpg";
import book12 from  "../images/book12.jpg";
import book13 from "../images/book13.jpg";
import book14 from "../images/book14.jpg";


function BookGrid() {
    const books = [
        { id: 1, title: "Write A New Name in The Book of Life", cover: book1 },
        { id: 2, title: "The Boy With One Name", cover: book2 },
        { id: 3, title: "The Book of Lost Names", cover: book3 },
        { id: 4, title: "The Name of the Wind", cover: book4 },
        { id: 5, title: "The Girl With No Name", cover: book5 },
        { id: 6, title: "Book of Names", cover: book6 },
        { id: 7, title: "The Story of a New Name", cover: book7 },
        { id: 8, title: "The Girl Without a Name", cover: book8 },
        { id: 9, title: "The Book Without a Name", cover: book9 },
        { id: 10, title: "Harry Potter and the Sorcerer's Stone", cover: book10 },
        { id: 11, title: "Anne", cover: book11 },
        { id: 12, title: "The Book of Names", cover: book12 },
        { id: 13, title: "The Magic of the Lost Story", cover: book13 },
        { id: 14, title: "The Guide", cover: book14 }
        
    ];

    return (
        <div className="book-grid">
            {books.map(book => (
                <div key={book.id} className="book-item">
                    <img src={book.cover} alt={book.title} className="book-cover" />
                    <p className="book-title">{book.title}</p>
                </div>
            ))}
        </div>
    );
}

export default BookGrid;
