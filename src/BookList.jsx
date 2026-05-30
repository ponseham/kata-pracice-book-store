import './styles.css'
import { BOOKS, BOOK_PRICE } from "./books.js";

export default function BookList() {
    return (
        <div className="row g-4">
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
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
