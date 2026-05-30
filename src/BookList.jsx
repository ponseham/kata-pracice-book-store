import './styles.css'
import { BOOKS } from "./books.js";

export default function BookList() {
    return (
        <div className="row g-4">
            <div className="col-lg-8">
                <div className="book-grid">
                    {BOOKS.map((book) => (
                        <div key={book.id} className="book-card">
                            <img src={book.coverUrl} alt={book.title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
