import './styles.css'
import { BOOKS, BOOK_PRICE } from "./books.js";

export default function BookList({ addBook }) {
    return (

        <div className="col-lg-8">
            <div className="book-grid">
                {BOOKS.map((book) => (
                    <div key={book.id} className="book-card">
                        <img src={book.coverUrl} alt={book.title} />
                        <div className="book-info" data-testid="book-card">
                            <h6>{book.title}</h6>
                            <p>{book.author}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <strong>{BOOK_PRICE} EUR</strong>
                                <button
                                    className="btn btn-primary btn-sm"
                                    aria-label={`Add ${book.title} to basket`}
                                    onClick={() => addBook(book.id)}
                                >
                                    +Add
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="discount-info">
                <strong>Mix &amp; Save: </strong>
                2 Books = 5% off · 3 Books = 10% off · 4 Books = 20% off · 5 Books = 25% off
            </div>
        </div>
    )
}
